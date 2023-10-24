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
      /// linea a borrar cuando este funcionando el search
      this.filteredHouses = houses;
    });
  }
}
