import { Component, OnInit } from '@angular/core';
import {MenuItems, Menu, MenuSections} from '../../../shared';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss']
})
export class MenuContentComponent implements OnInit {

  menuSections: Array<MenuSections> = MenuItems;

  loyalHeader: string = this.menuSections[0].title
  localHeader: string = this.menuSections[1].title
  extraEatsHeader: string = this.menuSections[2].title;

  loyalDogs: Array<Menu> = this.menuSections[0].items;
  localDogs: Array<Menu> = this.menuSections[1].items;
  extraEats: Array<Menu> = this.menuSections[2].items;

  constructor() { 
  }

  ngOnInit() {
    console.log(this.loyalDogs);
    
  }

}
