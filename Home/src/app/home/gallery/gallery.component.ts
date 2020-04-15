import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/shared/portfolio.service';
import { GalleryItem } from './galleryItem';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {

  portfolio: GalleryItem[];

  constructor(private profolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolio = this.profolioService.getPortfolio();
  }

}
