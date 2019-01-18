import {NgModule} from "@angular/core";


import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardComponent} from "./card.component";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,

  ],

  declarations: [CardComponent],
  exports: [CardComponent]
})
export class CardModule {
}
