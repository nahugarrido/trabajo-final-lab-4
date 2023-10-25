import { Component, Input } from '@angular/core';
import { House } from '../../models/house.model';

@Component({
  selector: 'app-house-table',
  templateUrl: './house-table.component.html',
  styleUrls: ['./house-table.component.scss'],
})
export class HouseTableComponent {
  @Input() houses: House[] = [];
}
