import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/users/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoged: boolean = false;
  isSidebarVisible: boolean = false;
  windowInnerWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.checkScreenWidth();
    sessionStorage.getItem('active-user')
      ? (this.isLoged = true)
      : (this.isLoged = false);
  }

  public sidebarHandler(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
    console.log(this.isSidebarVisible);
  }

  public closeSidebar(): void {
    this.isSidebarVisible = false;
  }

  private checkScreenWidth() {
    this.windowInnerWidth = window.innerWidth;
    this.isSidebarVisible = false;
  }

  public logout() {
    this.authService.cleanUserData();
    this.isLoged = false;
    this.router.navigate(['/']);
  }

  public navigateTo(url: string, section?: string) {
    this.closeSidebar();
    if (section) {
      this.router.navigate([url], { fragment: section });
    } else {
      this.router.navigate([url]);
    }
  }
}
