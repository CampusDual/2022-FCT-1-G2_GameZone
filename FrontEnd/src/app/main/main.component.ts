import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from "ontimize-web-ngx";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(@Inject(AuthService) private authService: AuthService) {
  }

  ngOnInit() {

  }

}



