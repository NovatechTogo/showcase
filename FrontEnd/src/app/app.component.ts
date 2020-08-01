import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) =>{
      if(event instanceof NavigationEnd) {
        if(this.router.url == '' || this.router.url == '/services') {
          document.documentElement.scrollTop = 0;
        }
      }
    });
  }
}
