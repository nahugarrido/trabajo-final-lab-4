import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() search: string = '';
  @Output() filterChange: EventEmitter<{ priceFrom: number; priceTo: number }> =
    new EventEmitter<any>();

  priceFrom: number = 0;
  priceTo: number = 0;

  constructor() {}

  ngOnInit(): void {}
  
  onFilterChange(){
    this.filterChange.emit({priceFrom:this.priceFrom,priceTo:this.priceTo})
  }
}
