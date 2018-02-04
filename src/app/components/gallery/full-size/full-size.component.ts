import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../../shared/index';

@Component({
  selector: 'app-full-size',
  templateUrl: './full-size.component.html',
  styleUrls: ['./full-size.component.scss']
})
export class FullSizeComponent implements OnInit {

  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
