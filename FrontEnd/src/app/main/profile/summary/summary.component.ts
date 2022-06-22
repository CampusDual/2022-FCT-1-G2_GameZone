import { HttpClient } from "@angular/common/http";

import { AfterViewInit, Component, Input, Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { map, mergeMap } from "rxjs/operators";
import { ProfileItems } from "../profile.component";
import { forkJoin, Observable } from "rxjs";
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

interface GameData {
  name: string;
  cover: {
    id: number;
    url: string;
  };
  url: string;
  id: number;
}

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"],
})
export class SummaryComponent implements AfterViewInit {
  user: string;
  data: ProfileItems[];
  data2: any;
  @Input() id: number;
  readonly SEARCH_URL = "http://localhost:33333/profile/profile?id=";

  constructor(private http: HttpClient, private auth: AuthService) {
    this.user = this.auth.getSessionInfo().user;
  }

  ngAfterViewInit(): void {
   this.getData();
  }

  getData() {
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

    const headers = { "content-type": "application/json" };

    this.http
      .post<any[]>(
        "http://localhost:33333/favorite_games/gameAndUser/search",
        '{"filter": {"user_id": "' +
        this.user +
        '" },' +
        '"columns": ["game_id"]}',
        { headers }
      )
      .pipe(
        mergeMap((x) =>
          forkJoin(
            // @ts-ignore
            x.data.map((y) =>
              this.http.get<GameData[]>(this.SEARCH_URL + y.game_id).pipe(
                map((item) => {
                  return item.map((x) => {
                    return {
                      url: x.cover.url
                        .slice(2)
                        .replace("t_thumb", "t_cover_big"),
                      name: x.name,
                      id: x.id,
                    } as GameData;
                  });
                })
              )
            )
          )
        )
      )
      .subscribe(
        (data) => (this.data2 = data),
        (error) => console.log(error)
      );
  }
  addFav() {
    console.log(this.data2)
    let gameFav:boolean = false;
    const headers = { "content-type": "application/json" };
    let body =
      '{"data":{"user_id": "' +
      this.user +
      '","game_name": "' +
      this.data[0].title +
      '","game_id": ' +
      this.data[0].id +
      "}}";

    if(this.data2 !=undefined){
      this.data2.forEach((x) => {
        if (x.some((e) => e.name === this.data[0].title)) {
          gameFav=true;
        }
      });
    }


    if (!gameFav) {
      this.http
        .post("http://localhost:33333/favorite_games/favoriteGames", body, {
          headers,
        })
        .subscribe(() => console.log("Added to favorites"), (error) => console.log(error), () => this.getData());
    }else {
      alert("Game already in favorites");
    }


  }
}
