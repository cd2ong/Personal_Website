import { Component, OnInit, Input } from '@angular/core';
import { Parallax } from '../parallax';

@Component({
  selector: 'content-window',
  templateUrl: './content-window.component.html',
  styleUrls: ['./content-window.component.less']
})
export class ContentWindowComponent implements OnInit {

  @Input() params: Parallax;
  @Input() sectionId: string;
  @Input() sectionTitle: string;
  @Input() center: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.params.bgImg) {
      this.params.bgImg = `url(${this.params.bgImg})`;
    }
  }

}
