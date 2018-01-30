import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { NavigationRoutes, NavigationRoute } from '../../shared';
import { Window } from 'selenium-webdriver';
import { log } from 'util';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('nav-state', [
      state('inactive', style({
        // '.navigation-wrapper': 'none',
        transform: 'translateY(-250px)'
      })),
      state('active', style({
        // display: 'block',
        transform: 'none'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class NavigationComponent implements OnInit {

  private navigationRoutes: Array<NavigationRoute> = NavigationRoutes;
  private window: any = window;
  mobileNavShowing: boolean = false;
  navShowing: boolean = false;
  hamburgerWhite: boolean = true

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth;
    if (event.target.innerWidth < 840) {
      this.mobileNavShowing = true;
    } else {
      this.mobileNavShowing = false;
    }
  }

  constructor() {
    if (this.window.innerWidth < 840) {
      this.mobileNavShowing = true;
    }


  }

  ngOnInit() {
  }

  resetMenu(){
    this.navShowing = false;
  }

  showNav(status?: string) {
    if (status != null || status != undefined) {
      if (status) {
        this.navShowing = true;
      } else {
        this.navShowing = false;
      }
    }

    if (!this.navShowing) {
      return 'inactive'
    }
    return 'active';
  }

}
