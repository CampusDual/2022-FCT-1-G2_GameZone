import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


export interface ProfileItems{

  backgroundCover: string
  cover: {
    id:number
    url:string
   }
   coverUrl:string
  title: string
  dateRelease: string
  genres:{
    id:number
    url:string
  }
  plataforms:{
    id:number
    url:string
   }
  description: string
  memberRating: string
  criticRating: string
  videos: [{
    id:number
    video_id:string
   }]
  screenshots:[{
    id:number
    url:string
   }]
  artworks:[{
    id:number
    url:string
   }]
  recommendations: {
    id:number
    url:string
   }
  dataScreenshots : string[]
  dataVideos : string[]
  dataArtworks : string[]
  id:number
  name:string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  id: string;

  constructor(private route : ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get("id")
  }

  ngOnInit() {

    console.log(this.id)

  }
}
