import { Component, OnInit } from "@angular/core";
import {
  combineLatest,
  forkJoin,
  from,
  concat,
  merge,
  interval,
  of,
  zip
} from "rxjs";
import { map, pluck, tap, zip as depzip } from "rxjs/operators";
import { AccountService } from "../account.service";
import { DoublerService } from "../operators/doubler.service";
import { VouchersService } from "../voucher.service";

@Component({
  selector: "app-combining",
  templateUrl: "./combining.component.html",
  styleUrls: ["./combining.component.scss"]
})
export class CombiningComponent implements OnInit {
  constructor(
    private vs: VouchersService,
    private as: AccountService,
    private ds: DoublerService
  ) {}

  ngOnInit(): void {}

  useConcat() {
    let sourceA$ = from([1, 2, 3, 4, 5]).pipe(depzip(interval(500), a => a));
    let sourceB$ = from(["a", "b", "c"]).pipe(depzip(interval(400), a => a));

    console.log("concat");
    merge(sourceA$, sourceB$).subscribe(console.log);
  }

  useMerge() {
    let sourceA$ = from([1, 2, 3, 4, 5]).pipe(depzip(interval(500), a => a));
    let sourceB$ = from(["a", "b", "c"]).pipe(depzip(interval(400), a => a));

    console.log("merge");
    merge(sourceA$, sourceB$).subscribe(console.log);
  }

  useZip() {
    let age$ = of<number>(27, 25, 29);
    let name$ = of<string>("Sepp", "Mark", "Susi");
    let isDev$ = of<boolean>(true, true, false);

    zip(age$, name$, isDev$)
      .pipe(map(([age, name, isDev]) => ({ age, name, isDev })))
      .subscribe(x => console.log(x));
  }

  useForkJoin() {
    let response1 = this.ds.double(3);
    let response2 = this.ds.double(9);
    let response3 = this.ds.double(2);

    forkJoin([response1, response2, response3]).subscribe(arr => {
      console.log("forkJoin", arr);
    });
  }

  leftJoin() {
    //get only the details for the vouchers
    let details$ = this.vs.getVoucher(2).pipe(
      pluck("Details"),
      tap(d => console.log("Details before combining", d))
    );

    let accounts$ = this.as.getAccounts();

    combineLatest(details$, accounts$)
      .pipe(
        map(([details, accounts]) =>
          details.map(d => ({
            ...d,
            Account: accounts.find(a => d.AccountID === a.ID).Name
          }))
        )
      )
      .subscribe(d => console.log("Details after combining", d));
  }
}