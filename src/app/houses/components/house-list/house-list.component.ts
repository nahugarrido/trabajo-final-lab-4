import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { House } from '../../models/house.model';
@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss'],
})
export class HouseListComponent implements OnInit, OnChanges {
  @Input() houses: House[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.houses = changes['houses'].currentValue;
  }
}
