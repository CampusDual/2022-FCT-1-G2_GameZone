import { AfterViewInit, Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "ontimize-web-ngx";
import { map, mergeMap } from "rxjs/operators";
import { forkJoin } from "rxjs";
import {Router} from "@angular/router";

interface GameData {
  name: string;
  cover: {
    id: number;
    url: string;
  };
  url: string;
  id:number
}

@Component({
  selector: "app-fav-biblio",
  templateUrl: "./fav-biblio.component.html",
  styleUrls: ["./fav-biblio.component.css"],
})
export class FavBiblioComponent implements AfterViewInit {
  readonly SEARCH_URL = "http://localhost:33333/profile/profile?id=";
  id: number[];
  pageOfItems: Array<any>;
  data: any;
  user: string;

  constructor(private http: HttpClient, private auth: AuthService, private router:Router) {
    this.user = this.auth.getSessionInfo().user;
  }

  ngAfterViewInit() {
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
                      id : x.id
                    } as GameData;
                  });
                })
              )
            )
          )
        )
      )
      .subscribe((data) => this.data=data, error => console.log(error),()=>console.log(this.data));
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
}
