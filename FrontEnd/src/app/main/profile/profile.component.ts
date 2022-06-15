import { Component, OnInit } from "@angular/core";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";



export interface ProfileItems{
  backgroundCover: string
  cover: {
    id: number;
    url: string;
  };
  coverUrl: string;
  title: string;
  dateRelease: string;
  genres: [{
    id: number;
    url: string;
  }];
  platforms:[ {
    id: number;
    url: string;
  }];
  summary: string;
  memberRating: number;
  criticRating: number;

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
  name: string;
  release_dates: {
    y: number;
    id: number;
  };
}

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private router : Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
    });
  }
}
