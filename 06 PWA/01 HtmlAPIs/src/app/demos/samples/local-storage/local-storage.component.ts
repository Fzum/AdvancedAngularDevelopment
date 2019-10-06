import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-local-storage",
  templateUrl: "./local-storage.component.html",
  styleUrls: ["./local-storage.component.scss"]
})
export class LocalStorageComponent implements OnInit {
  constructor() {}

  storageValue = "";
  key = "sampleKey";

  ngOnInit() {}

  setToStorage() {
    localStorage.setItem(this.key, this.storageValue);
    console.log("write to localStorage:", this.storageValue);
  }

  getFromStorage() {
    this.storageValue = localStorage.getItem(this.key);
  }
}
