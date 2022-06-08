import { AfterViewInit, Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from "rxjs/operators";

import { HttpClient } from "@angular/common/http";

interface GameData {
  name: string;
  cover: {
    id: number;
    url: string;
  };
  url: string;
}

@Component({
  selector: "app-search-component",
  templateUrl: "./search-component.component.html",
  styleUrls: ["./search-component.component.css"],
})
export class SearchComponentComponent implements AfterViewInit {
  queryField = new FormControl();
  readonly SEARCH_URL = "http://localhost:33333/game/game?name=";
  items : [];
  pageOfItems: Array<any>;
  data: GameData[];
  readonly FIELDS = "name,description,version,homepage";

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.queryField.valueChanges
      .pipe(
        map((value: string) => value.trim()),
        filter((value: string) => value.length > 3),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((value) => this.http.get<GameData[]>(this.SEARCH_URL + value))
      )
      .subscribe((data) => (this.data = data),error => console.log(error), ()=> console.log(this.data));

  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
