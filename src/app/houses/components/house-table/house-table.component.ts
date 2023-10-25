import { Component, Input, HostListener, OnInit } from '@angular/core';
import { House } from '../../models/house.model';

@Component({
  selector: 'app-house-table',
  templateUrl: './house-table.component.html',
  styleUrls: ['./house-table.component.scss'],
})
export class HouseTableComponent implements OnInit {
  @Input() houses: House[] = [];
  windowInnerWidth: number = window.innerWidth;

  ngOnInit() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  private checkScreenWidth() {
    this.windowInnerWidth = window.innerWidth;
    console.log(this.windowInnerWidth);
  }
}
