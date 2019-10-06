import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ConnectionService {
  constructor() {
    this.isOnline = this.createOnline$();
  }

  public isOnline: Observable<boolean>;

  createOnline$() {
    return of(window.navigator.onLine);
  }
}
