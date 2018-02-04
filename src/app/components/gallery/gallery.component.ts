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
  imagePath: string = ''
  images: Array<Image> = [];
  fullSize: boolean = false;
  currentImage: string = null;

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
          console.log(this.images);

        }
      }
    });
  }

  showFullSize(path: string){
    
    this.fullSize = true;
    this.currentImage = path;
    console.log('Going full size', this.currentImage);

  }


}
