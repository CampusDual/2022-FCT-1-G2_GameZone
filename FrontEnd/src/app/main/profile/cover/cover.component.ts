import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProfileItems } from '../profile.component';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements AfterViewInit {

data: ProfileItems[]

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
   this.http.get<ProfileItems[]>(
    "http://localhost:33333/profile/profile?id=126459"
   ).pipe(
     map((item)=>{
       return item.map((x)=>{
         return {
           ...x,
          coverUrl:x.cover.url.slice(2).replace("t_thumb", "t_cover_big")
         }as ProfileItems
       })
     })
   ).subscribe(data=>this.data=data)
  }



}
