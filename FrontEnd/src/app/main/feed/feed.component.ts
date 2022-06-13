import { HttpClient } from "@angular/common/http";
import { AfterViewInit, Component } from "@angular/core";

interface FeedItem {
  title: string;
  link: string;
  publishedDate: Date;
  description: string;
  contents: string;
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements AfterViewInit {

  data: FeedItem[]

  constructor(private http : HttpClient) {

  }
  ngAfterViewInit() {
    this.http.get<FeedItem[]>("http://localhost:33333/feedReader/feed").subscribe(next => {this.data = next},()=>{console.log("miau")}, () => {console.log(this.data)} )
  }

}
