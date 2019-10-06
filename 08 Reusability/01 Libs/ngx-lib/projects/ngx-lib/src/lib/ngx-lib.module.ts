import { NgModule } from "@angular/core";
import { NgxLibComponent } from "./ngx-lib.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [NgxLibComponent],
  exports: [NgxLibComponent]
})
export class NgxLibModule {}
