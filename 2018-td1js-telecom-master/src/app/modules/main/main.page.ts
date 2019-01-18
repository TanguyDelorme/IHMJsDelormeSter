import {Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import {Page1Service} from "../pages/page1/page1.service";

@Component({
  selector: 'main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  host: {'class': 'main'},
  providers: [Page1Service]
})
export class MainPage implements OnInit {

  public identifiant: string;

  constructor(public router: Router, public page1Service: Page1Service) {
  }

  ngOnInit() {
    this.identifiant = localStorage.getItem("identifiant");
  }

  goToPage1(){
    if(localStorage.getItem("identifiant") != ''){
      this.router.navigateByUrl("page1");
    }
  }

  validateName(name: string){
    localStorage.setItem("identifiant",name);
    this.page1Service.persistIdentifiant(name).then(
      ok => {
        console.log("Les identifiants ont bien été stockés");
      }
    );
    this.goToPage1();
  }

}

