import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jironemo.github.io';
   allPosts: any[] = [];
  constructor(private http: HttpClient) { }

    data:any = {
    dataSource: "mailclient-dbtest",  
    database: "mailserver",
    collection: "inbox",
    filter: {
        text:{
            $regex:"test"
        }
    }
};
  display:any ="";
 ngOnInit(){
  const headers = new HttpHeaders({'Content-Type': 'application/json','apiKey': 'NJDSNSIOlsoihRBfsZNBHHgdJWIJsO2wtYzXEEDeo6j1JZS3B452CbzOXFXpozdh'});

  var url:string = ("/action/find");
    this.http.post(url, JSON.stringify(this.data), {headers})
      .subscribe((document:any) => {
        for (var i = 0; i < document.documents.length; i++) {
          this.allPosts.push(document.documents[i].text);
        }
      });
}
  


}
