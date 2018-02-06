import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Image } from '../../shared/index';

// import * as _ from 'lodash';
// import * as _ from './../../../assets/gallery/images.json';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: Array<Image> = [];
  fullSize: boolean = false;
  currentImage: string = null;
  currentIndex: number;

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit() {
    // let path = require('./gallery.component.html');
    this.getImages();

  }

  getImages() {
    this._http.get('../../../assets/gallery/images.json').subscribe({
      next: (images: any) => {
        if (images != null && images != undefined) {
          this.images = images.data;
        }
      }
    });
  }

  showHideFullSize(){    
    if(this.fullSize = null){
      console.log('logasd');
      
      this.fullSize = true;
    } else if (this.fullSize = false){
      this.fullSize = true;
    } else {
      this.fullSize = false;
    }
  }

  showFullSize(path: string){
    
    this.fullSize = true;
    this.currentImage = path;
  }

  setFullSize(fullsize: boolean){
    this.fullSize = fullsize;
  }


}
