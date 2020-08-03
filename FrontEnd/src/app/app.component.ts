import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { RightMenuService } from './services/rightMenu/right-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, public rightMenuService: RightMenuService) {
    this.router.events.subscribe((event: Event) =>{
      if(event instanceof NavigationEnd) {
        if(this.router.url == '' || this.router.url == '/services') {
          document.documentElement.scrollTop = 0;
        }
      }
    });
  }
}
