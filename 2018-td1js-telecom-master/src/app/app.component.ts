import {Component, OnInit} from "@angular/core";
import {Page1Service} from "./modules/pages/page1/page1.service";
import {Router} from "@angular/router";
import {isEmpty} from "rxjs/internal/operators";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.scss'],
  providers: [Page1Service],
})
export class AppComponent implements OnInit {

  constructor(public page1Service: Page1Service, public router: Router) {

  }

  ngOnInit() {
    if(localStorage.getItem("identifiant") == null || localStorage.getItem("identifiant") == ""){
      this.router.navigateByUrl("main");
    }
    else{
      this.router.navigateByUrl("page1");
    }
  }
}
