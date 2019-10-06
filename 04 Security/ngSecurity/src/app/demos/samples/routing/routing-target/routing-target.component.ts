import { Component, OnInit } from '@angular/core';
import { RouterReducerState } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { getRouterInfo } from 'src/app/store/selectors/router.selectors';

@Component({
  selector: 'app-routing-target',
  templateUrl: './routing-target.component.html',
  styleUrls: ['./routing-target.component.scss']
})
export class RoutingTargetComponent implements OnInit {
  constructor(private store: Store<RouterReducerState>) {}

  routerState$ = this.store.select(getRouterInfo);

  ngOnInit() {
    this.store.select(getRouterInfo).subscribe(console.log);
  }
}
