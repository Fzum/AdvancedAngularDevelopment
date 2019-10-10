import { Component, OnInit } from "@angular/core";
import { MarkerService } from "../markers/marker.service";
import { DeviceService } from "angular-cordova/plugin";
import { Cordova } from "angular-cordova";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
  providers: [DeviceService]
})
export class SettingsComponent implements OnInit {
  constructor(private ms: MarkerService, private ds: DeviceService) {}

  isVirtual: any;
  platform: any;

  msg: string;

  ngOnInit() {
    this.ds.isVirtual().subscribe(data => (this.isVirtual = data));
    this.ds.platform().subscribe(data => (this.platform = data));
    Cordova.deviceready.subscribe(() => {});
  }

  resetMarkers() {
    this.ms.resetMarkers();
  }
}
