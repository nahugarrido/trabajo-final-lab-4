import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/houses/services/houses.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  isLoading: boolean = true;

  constructor(private houseService: HousesService) {}

  ngOnInit(): void {
    this.houseService.getHouses().subscribe((data) => {
      this.isLoading = false;
    });
  }
}
