import { Component } from '@angular/core';
import { PLAYERS } from './players/mock-players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [PLAYERS]
})
export class AppComponent {
  title:string = 'Premier League Top Scorers';

}
