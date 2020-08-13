import { Component, OnInit } from '@angular/core';
import { RightMenuService } from 'src/app/services/rightMenu/right-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private rightMenuService: RightMenuService) { }

  hearderManagerOnScroll() {
    let header = document.getElementById("header");
    let logo = document.getElementById("theLogo");
    document.onscroll = () => {
      if(document.documentElement.scrollTop > 80) {
        header.style.animationDuration = "1s";
        header.style.animationName = "headerAnimation";
        header.style.backgroundColor = "rgb(40, 64, 185)";
        header.style.height = "80px";
        header.style.boxShadow = "0 0 2px 3px rgba(0, 0, 0, 0.05);";

        logo.style.animationDuration = "1s";
        logo.style.animationName = "logoAnimation";
        logo.style.width = "70%";

      }else if(document.documentElement.scrollTop < 80) {
        header.style.animationDuration = "1s";
        header.style.animationName = "headerAnimationReverse";
        header.style.backgroundColor = '';
        header.style.height = "100px";
        header.style.boxShadow = "";

        logo.style.animationDuration = "1s";
        logo.style.animationName = "logoAnimationReverse";
        logo.style.width = "100%";
      }
    }
  }

  toggleMenu() {
    this.rightMenuService.toggleMenu();
  }

  ngOnInit() {
    this.hearderManagerOnScroll();
  }

}
