import { Component, OnInit } from '@angular/core';

import {} from '../../shared';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navigationRoutes: Array<string> =[
    'Home',
    'About',
    'Menu',
    'Gallery',
    'Lou Gear'
  ]

  constructor() { }

  ngOnInit() {
  }

}
