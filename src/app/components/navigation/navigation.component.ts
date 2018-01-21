import { Component, OnInit } from '@angular/core';

import { NavigationRoutes, NavigationRoute } from '../../shared';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navigationRoutes: Array<NavigationRoute> = NavigationRoutes;

  constructor() { }

  ngOnInit() {
  }

}
