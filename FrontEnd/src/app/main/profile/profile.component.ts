import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";



export interface ProfileItems{
  backgroundCover: string
  cover: {
    id: number;
    url: string;
  };
  coverUrl: string;
  title: string;
  dateRelease: string;
  genres: {
    id: number;
    url: string;
  };
  platforms: {
    id: number;
    url: string;
  };
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
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
    console.log(this.id);
  }
}
