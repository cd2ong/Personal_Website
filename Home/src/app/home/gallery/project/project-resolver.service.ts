import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PortfolioService } from 'src/app/shared/portfolio.service';

@Injectable({
  providedIn: 'root'
})

export class ProjectResolver implements Resolve<any> {

  constructor(private portfolioService: PortfolioService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {

    if (!!route.params.id && !!this.portfolioService.getItemById(route.params.id)){
      return this.portfolioService.getItemById(route.params.id);
    } else {
      this.router.navigate(['/404']);
      return false;
    }

  }
}
