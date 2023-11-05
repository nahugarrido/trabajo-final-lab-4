import { Component, OnInit } from '@angular/core';
import { HousesService } from '../../services/houses.service';
import { House } from '../../models/house.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  houses: House[] = [];
  filteredHouses: House[] = [];
  constructor(private houseService: HousesService) {}

  ngOnInit(): void {
    this.updateHouses();
  }

  private updateHouses(): void {
    this.houseService.getHouses().subscribe((houses) => {
      this.houses = houses;
      this.filteredHouses = houses;
    });
  }
  
  filterChangeHandler(filter: any) {
    const { priceFrom, priceTo } = filter;

    if (priceFrom && priceTo) {
      this.filteredHouses = this.houses.filter(
        (h) => h.price >= priceFrom && h.price <= priceTo
      );
    } else if (priceFrom && !priceTo) {
      this.filteredHouses = this.houses.filter((h) => h.price >= priceFrom);
    } else if (!priceFrom && priceTo) {
      this.filteredHouses = this.houses.filter((h) => h.price <= priceTo);
    } else {
      this.filteredHouses = this.houses;
    }
  }
}
