import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['add-character.component.scss'],
})

export class AddCharacter implements OnInit {
  @Output("alAgregarPersonaje")
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: "",
    power: 0
  };
  
  constructor() { }

  ngOnInit() { }

  emitCharacter(): void {
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character); 

    this.character = {name: "", power: 0};
  }
}