import { HttpClient } from "@angular/common/http";

import { AfterViewInit, Component, Input, Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { map } from "rxjs/operators";
import { ProfileItems } from "../profile.component";
import { User } from "../../../register/user";
import { Observable } from "rxjs";
import { AuthService } from "ontimize-web-ngx";

@Pipe({ name: "safeHtml" })
export class SafeHtml {
  constructor(private sanitizer: DomSanitizer) {}

  transform(html) {
    console.log(
      this.sanitizer.bypassSecurityTrustStyle("url('http://" + html + "')")
    );
    return this.sanitizer.bypassSecurityTrustStyle("url(http://" + html + ")");
  }
}

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"],
})
export class SummaryComponent implements AfterViewInit {
  user: string;
  data: ProfileItems[];
  @Input() id: number;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.user = this.auth.getSessionInfo().user
  }

  ngAfterViewInit(): void {
    this.http
      .get<ProfileItems[]>(
        "http://localhost:33333/profile/profile?id=" + this.id
      )
      .pipe(
        map((item) => {
          return item.map((x) => {
            return {
              ...x,
              coverUrl: x.cover.url.slice(2).replace("t_thumb", "t_cover_big"),
              title: x.name,
              summary: x.summary,
              releaseDatesY: x.release_dates[0].y,
              platforms: x.platforms,
              genres: x.genres,
            } as ProfileItems;
          });
        })
        // @ts-ignore
      )
      .subscribe(
        (data) => (this.data = data),
        (error) => console.log(error),
        () => console.log(this.data)
      );
  }

  addFav() {
    const headers = {"content-type": "application/json"};
    let body= '{"data":{"user_id": \"'+ this.user + '\","game_name": \"'+ this.data[0].title +'\","game_id": '+this.data[0].id +'}}';
    this.http.post("http://localhost:33333/favorite_games/favoriteGames", body,{headers}).subscribe();
  }
}
