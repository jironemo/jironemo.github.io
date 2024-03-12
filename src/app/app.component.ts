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
  


}
