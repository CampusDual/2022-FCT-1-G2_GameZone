import { AfterViewInit, Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProfileItems } from "../profile.component";
import { map } from "rxjs/operators";

@Component({
  selector: "app-reviews",
  templateUrl: "./reviews.component.html",
  styleUrls: ["./reviews.component.css"],
})
export class ReviewsComponent implements AfterViewInit {
  readonly SEARCH_URL = "http://localhost:33333/profile/profile?id=";
  data: ProfileItems[];

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.http
      .get<ProfileItems[]>(this.SEARCH_URL + 126459)
      .pipe(
        map((item) => {
          return item.map((x) => {
            return {
              criticRating:  Math.trunc(x.aggregated_rating),
              memberRating: Math.trunc(x.total_rating)
            } as ProfileItems;
          });
        })
      )
      .subscribe(
        (data) => (this.data = data),
        (error) => console.log(error)
      );
  }
}
