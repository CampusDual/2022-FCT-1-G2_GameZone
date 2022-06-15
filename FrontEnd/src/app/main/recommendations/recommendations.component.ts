import {AfterViewInit, Component, Input} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

interface GameData {
  name: string;
  cover: string;
  id:number;
}

@Component({
  selector: "app-recommendations",
  templateUrl: "./recommendations.component.html",
  styleUrls: ["./recommendations.component.scss"],
})
export class RecommendationsComponent implements AfterViewInit {
  data: GameData[];
  @Input() id: number;
  dataLoaded:Promise<boolean>
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  slickInit(e: any) {
    console.log("slick initialized");
  }

  breakpoint(e: any) {
    console.log("breakpoint");
  }

  afterChange(e: any) {
    console.log("afterChange");
  }

  beforeChange(e: any) {
    console.log("beforeChange");
  }

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.http
      .get<GameData[]>("http://localhost:33333/game/recommendations?id=" + this.id)
      .pipe(
        map((item) => {
          return item.map((x) => {
            return {
              ...x,
              cover: x.cover.slice(2).replace("t_thumb", "t_cover_big"),
            } as GameData;
          });
        })
      )
      .subscribe((data) => (this.data = data),
        error => console.log(error),
        ()=>this.dataLoaded=Promise.resolve(true));
  }
}
