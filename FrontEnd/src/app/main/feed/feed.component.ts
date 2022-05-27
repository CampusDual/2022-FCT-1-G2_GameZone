import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface feedItem{
  title: string,
  link:string,
  publishedDate: Date,
  description: string,
  contents: string

}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  data: feedItem[]

  constructor(private http : HttpClient) {

  }
  ngAfterViewInit() {
    this.http.get<feedItem[]>("http://localhost:33333/feedReader/feed").subscribe(next => {this.data = next},()=>{console.log("miau")}, () => {console.log(this.data)} )
  }

  ngOnInit() {
  }

}
