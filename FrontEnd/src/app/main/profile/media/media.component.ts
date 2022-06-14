import {AfterViewInit, Component, Pipe, PipeTransform} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProfileItems } from "../profile.component";
import {map} from "rxjs/operators";
import {DomSanitizer} from "@angular/platform-browser";


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    console.log(url)
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: "app-media",
  templateUrl: "./media.component.html",
  styleUrls: ["./media.component.scss"],
})
export class MediaComponent implements AfterViewInit {
  readonly SEARCH_URL = "http://localhost:33333/profile/profile?id=";
  data: ProfileItems[];
  dataMedia  ;
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    variableWidth: false };

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
      .get<ProfileItems[]>(
        this.SEARCH_URL + 126459
        // @ts-ignore
      ).pipe(
      map((item) => {
        return item.map((x) => {
          return {
            dataVideos: x.videos.map( value =>({videoUrl:value.video_id})),
            dataArtworks: x.artworks.map(value=>({ artworkUrl:value.url.slice(2).replace("t_thumb", "t_original")})),
            dataScreenshots: x.screenshots.map(value=>({ screenshotUrl:value.url.slice(2).replace("t_thumb", "t_original")}))
          } as unknown as ProfileItems
        })
      })
    )
      .subscribe(
        (data) => (this.data = data),
        (error) => console.log(error),
        ()=> this.dataMedia =  this.data[0].dataArtworks.concat(this.data[0].dataScreenshots).concat(this.data[0].dataVideos)
      );



  }




}
