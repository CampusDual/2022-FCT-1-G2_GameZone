import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

export interface ProfileItems {
  backgroundCover: string;
  cover: {
    id:number
    url:string
   }
  coverUrl:string
  title: string

  release_dates:{
    id:number
    y:number
  }
  releaseDatesY: number

  genres:[{
    id:number
    name:string
  }]

  platforms:{
    id:number
    url:string
   }
  platformsName: string
  platformsPlatformsLogoUrl: string

  summary: string
  memberRating: string
  criticRating: string
  description: string;
  videos: [
    {
      id: number;
      video_id: string;
    }
  ];
  screenshots: [
    {
      id: number;
      url: string;
    }
  ];
  artworks: [
    {
      id: number;
      url: string;
    }
  ];
  recommendations: {
    id: number;
    url: string;
  };
  dataScreenshots: string[];
  dataVideos: string[];
  dataArtworks: string[];
  id: number;
  aggregated_rating: number;
  total_rating: number;
}

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    console.log(this.id);
  }
}
