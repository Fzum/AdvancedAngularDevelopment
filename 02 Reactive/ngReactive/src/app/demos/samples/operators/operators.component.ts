import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';
import {
  delay,
  map,
  pluck,
  reduce,
  scan,
  take,
  tap,
  flatMap,
  filter,
  find
} from 'rxjs/operators';
import { isArray } from 'util';
import { Voucher } from '../model';
import { VouchersService } from '../voucher.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  constructor(private vs: VouchersService) {}

  response: any;

  ngOnInit() {}

  setLabel = v => ({ ...v, Label: `${v.Text} costs € ${v.Amount}` });

  vouchers$: Observable<Voucher[]> = this.vs.getVouchers();

  log = (msg: string, data: any) => {
    console.log(`executing: ${msg}, 'data' is Array: ${isArray(data)}`, data);
  };

  useMap() {
    this.vouchers$
      .pipe(
        map(vouchers => {
          return vouchers.map(v => ({
            ...v,
            Label: `${v.Text} costs € ${v.Amount}`
          }));
        })
      )
      .subscribe(data => this.log('use map()', data));
  }

  useTap() {
    let arr = [1, 4, 6, 7, 9, 11];

    from(arr)
      .pipe(
        tap(n => {
          (n = n * 2), console.log(n);
        })
      )
      .subscribe(d => console.log(d));
  }

  useMapAndTap() {
    this.vouchers$
      .pipe(
        tap(data => console.log('logged using tap() operator: ', data)),
        map(vs => vs.map(this.setLabel))
      )
      .subscribe(data => this.log('use pipe(), map() & tap()', data));
  }

  //JavaScript Array.find
  useFindArr() {
    this.vouchers$
      .pipe(map(v => v.find((v: Voucher) => v.ID == 3)))
      .subscribe(data => this.log('getByID - using find()', data));
  }

  //RxJs find Operator
  useFind() {
    this.vouchers$
      .pipe(
        flatMap((vouchers: Voucher[]) => vouchers),
        find(v => v.ID == 3)
      )
      .subscribe(data => this.log('getByID - using find()', data));
  }

  //JavaScript Array.filter
  useFilterArr() {
    this.vouchers$
      .pipe(map(v => v.filter((v: Voucher) => v.Paid)))
      .subscribe(data => this.log('useFilter', data));
  }

  useFilter() {
    this.vouchers$
      .pipe(
        flatMap((vouchers: Voucher[]) => vouchers),
        filter(v => v.Paid)
      )
      .subscribe(data => this.log('getByID - using find()', data));
  }

  //Compare the two outputs
  useTake() {
    this.vouchers$.pipe(take(3)).subscribe(data => this.log('useTake', data));
  }

  useInterval() {
    interval(1000)
      .pipe(take(3))
      .subscribe(x => console.log(x));
  }

  useDelay() {
    var fakeObservable = of(['hund', 'katze', 'maus']).pipe(delay(5000));
    console.log('before delay execution - waiting 5 secs');
    fakeObservable.subscribe(data => console.log(data));
  }

  useReduce() {
    let arr = [1, 4, 6, 7, 9, 11];

    from(arr)
      .pipe(reduce((acc, curr) => acc + curr, 0))
      .subscribe(d => console.log(d));
  }

  useScan() {
    let arr = [1, 4, 6, 7, 9, 11];

    from(arr)
      .pipe(scan((acc, curr) => acc + curr, 0))
      .subscribe(d => console.log(d));
  }

  usePluck() {
    let item = of({
      person: 'hugo',
      children: [{ name: 'jimmy' }, { name: 'giro' }, { name: 'soi' }]
    });

    item.pipe(pluck('children')).subscribe(console.log);
  }
}
