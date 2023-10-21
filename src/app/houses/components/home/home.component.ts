import { Component } from '@angular/core';
import { HousesService } from '../../services/houses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private houseService: HousesService) {}

  test(): void {
    this.houseService.getHouses().subscribe((houses) => {
      console.log(houses);
    });
  }
}
