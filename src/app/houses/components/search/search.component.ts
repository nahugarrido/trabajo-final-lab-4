import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import SearchUtils from './search.utils';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() filterChange: EventEmitter<{ searchAddress: any, priceFrom: number, priceTo: number }> =
    new EventEmitter<any>();

  priceFrom: number = 0;
  priceTo: number = 0;
  searchInput: string = '';

  constructor() {}

  ngOnInit(): void {}
  
  onFilterChange(){
    const address = SearchUtils.parseSearch(this.searchInput);
    console.log(address)
    this.filterChange.emit({searchAddress: address, priceFrom:this.priceFrom,priceTo:this.priceTo})
  }
}
