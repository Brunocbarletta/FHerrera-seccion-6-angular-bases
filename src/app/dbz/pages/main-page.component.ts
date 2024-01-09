import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: "Krilin",
      power: 1000
    },
    {
      name: "Goku",
      power: 9500
    },
    {
      name: "Veteta",
      power: 7500
    }
  ];

  addCharacter(character: Character): void {
    this.characters.push(character);
  }
  onDeleteCharacter(characterIndex: number): void {
    this.characters.splice(characterIndex, 1);
  }
}
