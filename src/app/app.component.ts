import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
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



  generateAccessToken(): Observable<any> {
    // Set up headers with apiKey
    var tokenUrl = "https://services.cloud.mongodb.com/api/client/v2.0/app/data-dxrnu/auth/providers/api-key/login"
    var apiKey = 'NJDSNSIOlsoihRBfsZNBHHgdJWIJsO2wtYzXEEDeo6j1JZS3B452CbzOXFXpozdh'
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // Make POST request to tokenUrl
    return this.http.post<any>(tokenUrl, {key:apiKey}, { headers });
  }

 ngOnInit(){
  var accessToken:string = "";
  this.generateAccessToken().subscribe((data:any) => {
    const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Bearer '+data.access_token });
    var url:string = ("https://data.mongodb-api.com/app/data-dxrnu/endpoint/data/v1/action/find");
      this.http.post(url, JSON.stringify(this.data), {headers})
        .subscribe((document:any) => {
          for (var i = 0; i < document.documents.length; i++) {
            this.allPosts.push(document.documents[i].text);
          }
        });
  });
  
}
  


}
