import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-geolocation",
  templateUrl: "./geolocation.component.html",
  styleUrls: ["./geolocation.component.scss"]
})
export class GeolocationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  //Wrapping the Promise - Alternative to Rx.DOM Wrapper
  getGeolocation$(): Observable<any> {
    return new Observable(observer => {
      navigator.geolocation.getCurrentPosition(position => {
        observer.next(position);
        observer.complete();
      }, observer.error.bind(observer));
    });
  }

  useLocation() {
    this.getGeolocation$().subscribe(pos => console.log);
  }
}
