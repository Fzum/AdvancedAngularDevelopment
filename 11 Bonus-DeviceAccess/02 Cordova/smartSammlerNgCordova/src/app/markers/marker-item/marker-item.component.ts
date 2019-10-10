import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MarkerService } from "../marker.service";
import { Marker, markerType, Direction } from "../../shared/model";
import { BLANK_MARKER } from "../../shared/consts";
import { Subscription, Observable } from "rxjs";
import { MediaObserver, MediaChange } from "@angular/flex-layout";

declare var navigator;
declare var Camera;

@Component({
  selector: "app-marker-item",
  templateUrl: "./marker-item.component.html",
  styleUrls: ["./marker-item.component.scss"]
})
export class MarkerItemComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private ms: MarkerService,
    private mediaObs: MediaObserver
  ) {}

  marker: Marker = null;
  imgHeight: number;

  editMode: boolean = false;
  showDirections: boolean = false;
  showWeather: boolean = false;

  getGeoSubs: Subscription = null;
  mediaSubs: Subscription = null;

  directions: Direction = {
    origin: { lat: 0, lng: 0 },
    destination: { lat: 0, lng: 0 }
  };

  ngOnInit() {
    this.getMarker();
    this.mediaObs.media$.subscribe((change: MediaChange) => {
      this.imgHeight = change.mqAlias == "xs" ? 100 : 250;
    });
    this.getCurrentPosition();
  }

  ngOnDestroy(): void {
    if (this.getGeoSubs != null) this.getGeoSubs.unsubscribe();
    if (this.mediaSubs != null) this.mediaSubs.unsubscribe();
  }

  getMarkerType(type: number): string {
    return markerType[type];
  }

  //Edit Mode

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  //Marker CRUD

  getMarker() {
    this.route.params.subscribe(params => {
      let id = params["id"] == null ? 1000 : +params["id"];
      this.ms.getMarker(id).subscribe((m: Marker) => {
        if (m != null) {
          this.marker = { ...m };
        } else {
          this.marker = this.getNewMarker();
          this.editMode = true;
        }
        this.setMarkerAsDestination(this.marker.lat, this.marker.lng);
      });
    });
  }

  getNewMarker(): Marker {
    let marker: Marker = new Marker();
    marker.imgURL = BLANK_MARKER;
    marker.type = 0;

    // this.getGeoSubs = this.geolocationService
    //   .getCurrentPosition()
    //   .subscribe(res => {
    //     this.copyCoordsToMarker(
    //       this.marker,
    //       res.coords.latitude,
    //       res.coords.longitude
    //     );
    //   });
    return marker;
  }

  saveMarker() {
    this.ms.saveMarker(this.marker);
    this.toggleEdit();
  }

  //Marker GPS

  setMarkerAsDestination(lat: number, lng: number) {
    if (lat != 0 && lng != 0) {
      this.directions.destination.lat = lat;
      this.directions.destination.lng = lng;
      this.marker.hasCoords = true;
    }
  }

  copyCoordsToMarker(marker: Marker, lat: number, lng: number) {
    marker.lat = lat;
    marker.lng = lng;
    marker.hasCoords = true;
  }

  setMarkerLocation() {
    // this.getGeoSubs = this.geolocationService
    //   .getCurrentPosition()
    //   .subscribe(res => {
    //     this.copyCoordsToMarker(
    //       this.marker,
    //       res.coords.latitude,
    //       res.coords.longitude
    //     );
    //   });
  }

  navigateTo() {
    this.directions.destination.lat = this.marker.lat;
    this.directions.destination.lng = this.marker.lng;
    this.showDirections = true;
  }

  private getCurrentPosition() {
    // this.getGeoSubs = this.geolocationService
    //   .getCurrentPosition()
    //   .subscribe(res => {
    //     this.directions.origin.lat = res.coords.latitude;
    //     this.directions.origin.lng = res.coords.longitude;
    //   });
  }

  //Camera

  takePicture() {
    var m = this.marker;

    var camOptions = {
      quality: 100,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: 0,
      mediaType: Camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true
    };

    navigator.camera.getPicture(
      function cameraSuccess(imageUri) {
        // You may choose to copy the picture, save it somewhere, or upload.
        m.imgURL = imageUri;
      },
      function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");
      },
      camOptions
    );
  }

  //Sharing

  shareMarker() {}
}
