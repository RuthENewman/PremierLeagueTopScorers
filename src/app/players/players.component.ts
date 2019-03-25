import { Component, OnInit } from '@angular/core';
// import { Player } from './player';
import { PLAYERS } from './mock-players';
import { FilterPipe } from '../filter.pipe';
// const playersUrl = 'http://localhost:3000/players';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  players = PLAYERS

  constructor() { }

  ngOnInit() {

  }

}
