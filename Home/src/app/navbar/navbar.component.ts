import { Component, OnInit, Inject } from '@angular/core';
import { JQUERY_TOKEN } from '../shared/j-query.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  menuOpen: boolean = false;

  constructor(@Inject(JQUERY_TOKEN) private $: any) { }

  ngOnInit(): void {
  }

  toggleMenu(): void {

    this.menuOpen = !this.menuOpen;

  }

}
