import { Component, HostListener, ElementRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  finalPercentage: number = 97.9;
  currentPercentage: number = 0;
  animated = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (!this.animated) {
      const element = this.el.nativeElement.querySelector('.percentage-container');
      if (this.isElementInViewport(element)) {
        this.animatePercentage();
        this.animated = true;
      }
    }
  }

  animatePercentage() {
    const interval = 40; // Time interval in milliseconds
    const step = 4.8; // Value to increment in each step

    const animation = setInterval(() => {
      this.currentPercentage += step;
      if (this.currentPercentage >= this.finalPercentage) {
        this.currentPercentage = this.finalPercentage;
        clearInterval(animation);
      }
    }, interval);
  }

  isElementInViewport(element: any): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom >= 0
    );
  }
}