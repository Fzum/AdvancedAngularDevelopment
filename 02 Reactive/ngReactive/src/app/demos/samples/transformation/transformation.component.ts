import { Component, OnInit } from "@angular/core";
import { fromEvent, of } from "rxjs";
import { delay, flatMap, mapTo, mergeMap } from "rxjs/operators";
import { AccountService } from "../account.service";
import { VouchersService } from "../voucher.service";

@Component({
  selector: "app-transformation",
  templateUrl: "./transformation.component.html",
  styleUrls: ["./transformation.component.scss"]
})
export class TransformationComponent implements OnInit {
  constructor(private vs: VouchersService, private as: AccountService) {}

  ngOnInit() {}

  //can be used like an "event handler"
  useMapTo() {
    const clicks = fromEvent(document, "click");
    clicks.pipe(mapTo("You clicked the button")).subscribe(console.log);
  }

  // faking network request for save
  useMergeMap() {
    const saveLocation = location => {
      return of(location).pipe(delay(500));
    };
    // streams
    const click$ = fromEvent(document, "click");

    click$
      .pipe(
        mergeMap((e: MouseEvent) => {
          return saveLocation({
            x: e.clientX,
            y: e.clientY,
            timestamp: Date.now()
          });
        })
      )
      // Saved! {x: 98, y: 170, ...}
      .subscribe(r => console.log("Saved!", r));
  }

  //flatMapt is an alias for merge map
  flatMapService() {
    this.vs
      .getVoucher(2)
      .pipe(
        flatMap(data => {
          let acctID = data.Details[0].AccountID;
          return this.as.getAccount(acctID);
        })
      )
      .subscribe(acct => console.log("flatMap acct", acct));
  }

  useConcatMap() {
    // this.form.valueChanges
    // .pipe(
    //     concatMap(formValue => this.http.put(`/api/course/${courseId}`,
    //                                          formValue))
    // )
    // .subscribe(
    //    saveResult =>  ... handle successful save ...,
    //     err => ... handle save error ...
    // );
  }

  useSwitchMap() {
    //   this.bookId.valueChanges.pipe(
    //     switchMap(id => {
    //       console.log(id);
    //       return this.bookService.getBook(id);
    //     })
    //  ).subscribe(res => this.book = res);
  }

  useExhaustMap() {}
}
