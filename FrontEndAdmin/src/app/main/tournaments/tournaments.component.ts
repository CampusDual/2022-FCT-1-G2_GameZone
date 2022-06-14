import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TournamentsComponent
    }
  ]
})
export class TournamentsComponent{
}
