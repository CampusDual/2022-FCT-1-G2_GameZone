import { HttpClient } from "@angular/common/http";
import { AfterViewInit, Component, Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { map } from "rxjs/operators";
import { ProfileItems } from "../profile.component";

@Pipe({name: 'safeHtml'})
export class SafeHtml {
  constructor(private sanitizer:DomSanitizer){}

  transform(html) {
    console.log(this.sanitizer.bypassSecurityTrustStyle('url(\'http://' + html+ '\')'))
    return this.sanitizer.bypassSecurityTrustStyle('url(http://' + html+ ')');
  }
}
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements AfterViewInit {

data: ProfileItems[]

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
   this.http.get<ProfileItems[]>(
    "http://localhost:33333/profile/profile?id=126459"
   )
   .pipe(
     map((item)=>{
       return item.map((x)=>{
         return {
           ...x,
          coverUrl:x.cover.url.slice(2).replace("t_thumb", "t_cover_big"),
          title:x.name,
          summary:x.summary,
          releaseDatesY:x.release_dates[0].y,
          platforms:x.platforms[0].name,
          genres:x.genres


         }as ProfileItems
       })
     })
   ).subscribe(data=>this.data=data, error=>console.log(error))
  }



}
