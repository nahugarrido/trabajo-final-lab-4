import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSidebarVisible: boolean = false;
  windowInnerWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkScreenWidth();
  }

  public sidebarHandler(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
    console.log(this.isSidebarVisible);
  }

  public closeSidebar(): void {
    this.isSidebarVisible = false;
  }

  private checkScreenWidth() {
    this.isSidebarVisible = false;
  }
}