import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: 'see-users',
  templateUrl: './see-users.component.html',
  styleUrls: ['./see-users.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SeeUsersComponent
    }
  ]

})
export class SeeUsersComponent{


}
