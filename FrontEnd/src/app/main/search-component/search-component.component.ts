import { AfterViewInit, Component } from "@angular/core";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

interface GameData {
  name: string;
  cover: {
    id: number;
    url: string;
  };
  url: string;
  id:number;
}

@Component({
  selector: "app-search-component",
  templateUrl: "./search-component.component.html",
  styleUrls: ["./search-component.component.scss"],
})
export class SearchComponentComponent implements AfterViewInit {
  readonly SEARCH_URL = "http://localhost:33333/game/game?name=";
  pageOfItems: Array<any>;
  data: GameData[];


  constructor(private http: HttpClient, private router: ActivatedRoute) {}

  ngAfterViewInit() {
    this.router.queryParams
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((value) =>
          this.http.get<GameData[]>(this.SEARCH_URL + value.title)
        )
      )
      .subscribe(
        (data) => (this.data=data.filter((item)=>item.cover)),
        (error) => console.log(error)
      );
  }

  onChangePage(pageOfItems: Array<any>) {
    console.log(pageOfItems)
    this.pageOfItems = pageOfItems;
  }
}
