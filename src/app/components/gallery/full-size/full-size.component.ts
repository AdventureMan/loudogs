import { Component, OnInit, Input, Output } from '@angular/core';
import { Image } from '../../../shared/index';
import { EventEmitter } from '@angular/core';
import { log } from 'util';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-full-size',
  templateUrl: './full-size.component.html',
  styleUrls: ['./full-size.component.scss']
})
export class FullSizeComponent implements OnInit {

  @Input() image: string;
  @Input() gallery: Array<Image> = [];
  @Output() onMinimize = new EventEmitter<boolean>();

  private currentIndex: number;
  private maxLength: number;
  private window: any = window;


  constructor() { }

  ngOnInit() {
    this.getCurrentIndex();
    this.maxLength = this.gallery.length;

  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent){
    if(event.code === 'ArrowLeft'){
      this.nav(false);
    } else if (event.code === 'ArrowRight'){
      this.nav(true);
    }  else if (event.code === 'Escape'){
      this.minimize();
    } else {
      //meh
    }
  }

  minimize() {
    this.onMinimize.emit(false);
  }

  getCurrentIndex() {
    if (this.image.length > 0) {
      let index = this.gallery.findIndex((i) => i.path == this.image);
      if (index > -1) {
        this.currentIndex = index;
      }
    }
  }

  nav(next: boolean) {
    // if(this.currentIndex = this.maxLength){
    //   return;
    // }
    if (next) {
      this.image = this.gallery[this.currentIndex + 1].path;
      this.currentIndex = this.currentIndex + 1;
    } else {
      this.image = this.gallery[this.currentIndex - 1].path;
      this.currentIndex = this.currentIndex - 1;

    }
  }

}
