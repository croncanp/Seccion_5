import {Component} from '@angular/core';
import {DbzService} from '../services/dbz.service';
import {Character} from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService: DbzService) {
  }

  get character(): Character[] {
    /* se usa el espred([...this.dbzService.characters]) para generar una copia del obje original
    y afectar solo la copia con el obj base*/
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character):void{
    this.dbzService.addCharacter(character);
  }
}
