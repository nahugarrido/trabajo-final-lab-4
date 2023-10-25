import { Component, OnInit } from '@angular/core';
import { HouseTableComponent } from '../house-table/house-table.component';
import { House } from '../../models/house.model';
import { HousesService } from '../../services/houses.service';

@Component({
  selector: 'app-house-management',
  templateUrl: './house-management.component.html',
  styleUrls: ['./house-management.component.scss'],
})
export class HouseManagementComponent implements OnInit {
  houses: House[] = [];

  constructor(private housesService: HousesService) {}

  ngOnInit(): void {
    this.housesService.getHouses().subscribe((houses) => {
      this.houses = houses;
    });
  }
}
