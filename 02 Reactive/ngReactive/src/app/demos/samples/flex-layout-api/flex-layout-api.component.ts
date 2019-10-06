import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { environment } from "src/environments/environment";
import { SubSink } from "subsink";

@Component({
  selector: "app-flex-layout-api",
  templateUrl: "./flex-layout-api.component.html",
  styleUrls: ["./flex-layout-api.component.scss"]
})
export class FlexLayoutApiComponent implements OnInit {
  constructor(private obsMedia: MediaObserver) {}

  sub: SubSink = new SubSink();
  mdpath: string | null = environment.markdownPath + "flexlayout.md";
  watcher: Subscription;

  mq: string;
  isPhone: boolean;
  isTablet: boolean;

  ngOnInit() {
    this.subscribeScreen();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log("Subscription unsubscribed");
  }

  subscribeScreen() {
    this.sub.sink = this.obsMedia.media$.subscribe((change: MediaChange) => {
      this.mq = change.mqAlias;
      switch (change.mqAlias) {
        case "xs":
          this.isPhone = true;
          this.isTablet = false;
          break;
        case "sm":
          this.isPhone = false;
          this.isTablet = true;
          break;
        default:
          this.isPhone = false;
          this.isTablet = false;
          break;
      }
    });
  }

  getClass() {
    return this.isPhone ? "phoneClass" : "notPhoneClass";
  }
}
