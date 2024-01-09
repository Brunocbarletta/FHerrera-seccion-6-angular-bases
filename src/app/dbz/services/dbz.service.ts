import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: this.setId(),
      name: "Krilin",
      power: 1000
    },
    {
      id: this.setId(),
      name: "Goku",
      power: 9500
    },
    {
      id: this.setId(),
      name: "Vegeta",
      power: 7500
    }
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {...character, id: this.setId() };
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    const i = this.characters.findIndex(character => character.id === id);
    this.characters.splice(i, 1);
  }
  
  setId() {
    return uuid();
  }
}