import { Component, OnInit } from '@angular/core';
import { HousesService } from '../../services/houses.service';
import { House } from '../../models/house.model';
import SearchUtils from '../search/search.utils';

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
    const { searchAddress, priceFrom, priceTo } = filter;

    this.filterByPrice(priceFrom, priceTo);
    this.filterBySearchInput(searchAddress);
  }

  /* Filter functions */
  private filterBySearchInput(search: any) {
    if (search.street && !search.district && !search.country) {
      this.filteredHouses = this.filteredHouses.filter((h) => SearchUtils.includesNormalized(h.address.street,search.street));
    } else if (search.street && search.district && !search.country) {
      this.filteredHouses = this.filteredHouses.filter((h) => SearchUtils.includesNormalized(h.address.street,search.street) && SearchUtils.includesNormalized(h.address.district,search.district));
    } else if (search.street && search.district && search.country) {
      this.filteredHouses.filter((h) => SearchUtils.includesNormalized(h.address.street,search.street) &&
          SearchUtils.includesNormalized(h.address.district,search.district) &&
        SearchUtils.includesNormalized(h.address.country,search.country)
      );
    }
  }

  private filterByPrice(priceFrom: any, priceTo: any) {
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
