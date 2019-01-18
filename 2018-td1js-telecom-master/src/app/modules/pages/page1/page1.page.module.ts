import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {Page1Page} from "./page1.page";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardModule} from "../web-card/card.module";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    CardModule,
    RouterModule.forChild([
      {
        path: '',
        component: Page1Page
      }
    ])
  ],
  bootstrap: [Page1Page],
  declarations: [Page1Page]
})
export class Page1PageModule {
}
