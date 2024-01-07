import { Component, Input, OnInit } from '@angular/core';
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
      name: 'Trunks',
      power: 10
    }
  ];

  ngOnInit() { }
}