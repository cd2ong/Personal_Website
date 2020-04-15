import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/shared/portfolio.service';
import { GalleryItem } from '../galleryItem';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {

  project: GalleryItem;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.forEach((data) => {
      console.log(data);
      this.project = data.project;
  });
  }

}
