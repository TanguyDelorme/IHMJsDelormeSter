import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Storage} from "@ionic/storage";
import {Router} from "@angular/router";

@Injectable()
export class Page1Service {


  constructor(public httpclient: HttpClient, public storage: Storage) {

  }

  getArticles(){
    return this.httpclient.get("https://jsonplaceholder.typicode.com/posts");
  }

  persistArticles(articles){
    return this.storage.set("articles", articles);
  }

  getIdentifiant(){
    return this.storage.get("identifiant");
  }

  persistIdentifiant(identifiant){
    return this.storage.set("identifiant", identifiant);
  }
}
