import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})

export class ListComponent implements OnInit {
  @Input('characters')
  public characterList: Character[] = [
    {
      id: "TestDataID",
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    this.onDelete.emit(id);
  }

  ngOnInit() { }
}