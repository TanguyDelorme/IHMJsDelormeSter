import {Component, OnInit} from "@angular/core";
import {Page1Service} from "./page1.service";
import {ModalController, NavParams} from "@ionic/angular";


@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html'
})
export class ModalPage {

  val;
  constructor(private modalCtrl: ModalController, private nav:NavParams) {

    this.val=this.nav.get("data");
    console.log(this.val.title);


  }
  dismiss(){
    this.modalCtrl.dismiss();
  }
}

