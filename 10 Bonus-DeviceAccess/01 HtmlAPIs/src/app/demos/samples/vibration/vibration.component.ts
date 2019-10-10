import { Component, OnInit } from "@angular/core";
import { NgxVibrationService } from "ngx-vibration";

@Component({
  selector: "app-vibration",
  templateUrl: "./vibration.component.html",
  styleUrls: ["./vibration.component.scss"]
})
export class VibrationComponent implements OnInit {
  constructor(private vibrationService: NgxVibrationService) {}

  hasVibrationSupport = false;

  ngOnInit() {
    this.hasVibrationSupport = this.vibrationService.hasVibrationSupport();
  }

  vibrate() {
    this.vibrationService.vibrate([200, 100, 200]);
  }

  cancelVibration() {
    this.vibrationService.cancelVibration();
  }
}
