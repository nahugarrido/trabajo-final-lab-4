import { Component, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() search: string = '';

  searchControl = new FormControl('');

  constructor() {}

  public onSearch(event: any): void {
    this.search = event.target.value;
  }
}
