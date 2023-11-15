import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda_bootstrapAngular';
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.navbarShrink();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.navbarShrink();
  }

  navbarShrink() {
    const navbarCollapsible = this.el.nativeElement.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  }
}
