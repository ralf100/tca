import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'AmdisX@AIT Dashbaord';
  @ViewChild('mainNav') mainNav;

  constructor(private router: Router, private renderer: Renderer2) {
    this.renderer.listen('window', 'scroll', (event) => {
      const scroll = window.pageYOffset;
      if (scroll > 0) {
        console.log('Added');
        this.renderer.addClass(this.mainNav.nativeElement, 'navbar-scroll');
        // this.mainNav.nativeElement.addClass('navbar-scroll');
      } else {
        console.log('Removed');
        this.renderer.removeClass(this.mainNav.nativeElement, 'navbar-scroll');
        // this.mainNav.nativeElement.removeClass('navbar-scroll');
      }
      if (scroll > 200) {
        this.renderer.addClass(this.mainNav.nativeElement, 'bg-light');
        // this.mainNav.nativeElement.addClass('bg-light');
      } else {
        this.renderer.removeClass(this.mainNav.nativeElement, 'bg-light');
        // this.mainNav.nativeElement.removeClass('bg-light');
      }
    });
  }

  ngOnInit() { }

  isActive(viewLocation: String) {
    if (viewLocation === this.router.url) {
      return 'nav-item active';
    }
    return 'nav-item';
  }
}
