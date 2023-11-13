import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(private route: ActivatedRoute, private el: ElementRef) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const section = this.el.nativeElement.querySelector(`#${fragment}`);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
