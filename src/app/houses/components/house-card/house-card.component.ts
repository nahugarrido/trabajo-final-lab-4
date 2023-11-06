import { Component, Input, OnInit } from '@angular/core';
import { House } from '../../models/house.model';
@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss'],
})
export class HouseCardComponent implements OnInit {
  @Input() house!: House;

  constructor() {}

  ngOnInit(): void {}
}
