import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { DemoItem } from './demo-item.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<DemoItem[]>(`${environment.apiUrl}demos`)
      .subscribe(data => (this.arrDemos = data));
  }

  private arrDemos: DemoItem[] = [];
  private demos: BehaviorSubject<DemoItem[]> = new BehaviorSubject(
    this.arrDemos
  );

  getDemos(): Observable<DemoItem[]> {
    return this.demos;
  }

  delete(item: DemoItem) {
    return this.httpClient.delete(`${environment.apiUrl}demos/${item.id}`);
  }
}
