import {Component, OnInit, AfterViewInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";


interface GameData {
  name: string,
  id: number,
  aggregated_rating: number,
  cover: {
    id: number,
    url: string
  }
url : string
}

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit, AfterViewInit {

  data: GameData[];

  constructor(private http: HttpClient) {
  }

  ngAfterViewInit() {
    this.http.get<GameData[]>("http://localhost:33333/game/ranking").pipe(
      map((item) => {
        return item.map((x) => {
          return {
            ...x,
            aggregated_rating: (parseInt(x.aggregated_rating.toFixed(2)) /10),
            url : x.cover.url.slice(2)

          } as GameData
        })
      })
    ).subscribe(data => this.data= data)
  }

  ngOnInit() {

  }

}
