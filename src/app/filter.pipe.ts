import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(players: any, term: any): any {
    // check if search term is undefined
    if (term === undefined)
      return players
    // return updated players array
    return players.filter(function(player){
      return player.team.toLowerCase().includes(term.toLowerCase()) || player.name.toLowerCase().includes(term.toLowerCase()) || player.country.toLowerCase().includes(term.toLowerCase())
    });
  }

}
