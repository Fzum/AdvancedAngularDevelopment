import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as Rx from "rx-dom";
import { Observable } from "rxjs";
import { SubSink } from "subsink";
import { ConnectionService } from "../../shared/connection/connection.service";
import { BLANK_MARKER } from "../../shared/consts";
import { Direction, Marker, markerType } from "../../shared/model";
import { ScreenService } from "../../shared/screen/screen.service";
import { MarkerService } from "../marker.service";

@Component({
  selector: "app-marker-item",
  templateUrl: "./marker-item.component.html",
  styleUrls: ["./marker-item.component.scss"]
})
export class MarkerItemComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private ms: MarkerService,
    private cs: ConnectionService,
    private screen: ScreenService
  ) {}

  marker: Marker = null;
  imgHeight: number;

  online: boolean;
  mq: string;

  editMode: boolean = false;
  showDirection: boolean = false;
  showWeather: boolean = false;

  direction: Direction = {
    origin: { lat: 0, lng: 0 },
    destination: { lat: 0, lng: 0 }
  };

  sub: SubSink = new SubSink();

  ngOnInit() {
    this.getMarker();
    this.subscribeScreen();
    this.subscriptConnetionState();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private subscribeScreen() {
    this.sub.sink = this.screen.MQ.subscribe((mq: string) => {
      this.imgHeight = mq == "xs" ? 100 : 250;
    });
  }

  private subscriptConnetionState() {
    this.sub.sink = this.cs.isOnline.subscribe(online => {
      this.online = online;
    });
  }

  getMarkerType(type: number): string {
    return markerType[type];
  }

  //Edit Mode

  toggleEdit(showSnack: boolean = false) {
    this.editMode = !this.editMode;
  }

  //Marker CRUD

  getMarker() {
    this.sub.sink = this.route.params.subscribe(params => {
      let id = params["id"] == null ? 1000 : +params["id"];
      this.ms.getMarker(id).subscribe((m: Marker) => {
        if (m != null) {
          this.marker = { ...m };
        } else {
          this.marker = this.getNewMarker();
          this.editMode = true;
        }
        this.checkCoords(this.marker);
        this.setMarkerAsDestination();
      });
    });
  }

  getNewMarker(): Marker {
    let marker: Marker = new Marker();
    marker.imgURL = BLANK_MARKER;
    marker.type = 0;
    this.sub.sink = this.getGeolocation$().subscribe(p => {
      this.copyCoordsToMarker(marker, p.coords.latitude, p.coords.longitude);
    });
    return marker;
  }

  saveMarker() {
    this.ms.saveMarker(this.marker);
    this.toggleEdit();
  }

  //Marker GPS

  checkCoords(m: Marker) {
    if (this.marker.lat != undefined && this.marker.lng != undefined) {
      this.marker.hasCoords = true;
    }
  }

  setMarkerAsDestination() {
    if (this.marker != undefined) {
      this.direction.destination.lat = this.marker.lat;
      this.direction.destination.lng = this.marker.lng;
    }
  }

  copyCoordsToMarker(marker: Marker, lat: number, lng: number) {
    marker.lat = lat;
    marker.lng = lng;
    marker.hasCoords = true;
  }

  //Wrapping the Promise - Alternative to Rx.DOM Wrapper
  getGeolocation$(): Observable<Position> {
    return new Observable(observer => {
      navigator.geolocation.getCurrentPosition(
        (pos: Position) => {
          observer.next(pos);
          observer.complete();
        },
        (err: PositionError) => {
          observer.error(err);
        }
      );
    });
  }

  setMarkerLocation() {
    this.sub.sink = this.getGeolocation$().subscribe((p: Position) => {
      this.copyCoordsToMarker(
        this.marker,
        p.coords.latitude,
        p.coords.longitude
      );
    });
  }

  watchDirection() {
    this.sub.sink = Rx.DOM.geolocation
      .watchPosition()
      .subscribe((data: any) => {
        this.direction.origin.lat = data.coords.latitude;
        this.direction.origin.lng = data.coords.longitude;
        this.showDirection = true;
      });
  }

  //Camera

  takePicture() {
    console.log("take pic");
  }
}
