import {Component, OnInit} from "@angular/core";
import {Page1Service} from "./page1.service";
import {Router} from "@angular/router";

@Component({
  selector: 'page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  host: {'class': 'page1'},
  providers: [Page1Service]
})
export class Page1Page implements OnInit {

  public articles: Array<any>;

  public toShow: boolean;

  constructor(public page1Service: Page1Service, public router: Router) {
    this.toShow = true;
  }


  ngOnInit() {
    console.log(localStorage.getItem("identifiant"));
    if(localStorage.getItem("identifiant") == ''){
      console.log("Tu n'es pas connecté");
      this.router.navigateByUrl("main");
    }
    else{
      console.log("Tu es connecté");
    }
    this.page1Service.getArticles().subscribe(
      (data: Array<any>) => {
        this.articles = data;

        this.page1Service.persistArticles(data).then(
          ok => {
            console.log("Les articles ont bien été stockés");
          }
        );
      }
    );
  }

  goToMainPage(){
    this.router.navigateByUrl("main");
  }

}

