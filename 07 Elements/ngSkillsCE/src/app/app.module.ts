import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

import { SkillslistComponent } from './skillslist/skillslist.component';

//Toggle comment to develop - also uncomment  everything in app.component.ts
// import { AppComponent } from './app.component';
// @NgModule({
//   declarations: [AppComponent, SkillslistComponent],
//   imports: [BrowserModule, FormsModule],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}

//Toggle comment to build - also comment everything in app.component.ts
@NgModule({
  declarations: [SkillslistComponent],
  imports: [BrowserModule, FormsModule],
  entryComponents: [SkillslistComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(SkillslistComponent, {
      injector: this.injector
    });

    customElements.define('ngxe-skills', el);
  }
}
