import {Component, Input, OnInit} from '@angular/core';
import {ModalPage} from "../modal/modal.component";
import {ModalController} from "@ionic/angular";


@Component({
  selector: 'card-article',
  templateUrl: './card.component.html',

})
export class CardComponent implements OnInit {
  public boolCheck:boolean=false;

  @Input()
  public article:Array<any>;



  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }
  async openModal(nb){
    const modal =await  this.modalCtrl.create({
      component: ModalPage,
      componentProps : { data:nb}

    });
    await modal.present();



  }
}
