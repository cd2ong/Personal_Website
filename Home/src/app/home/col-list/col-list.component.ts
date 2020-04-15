import { Component, OnInit } from '@angular/core';
import { Skills } from './skills';
import { SkillsService } from 'src/app/shared/skills.service';

@Component({
  selector: 'col-list',
  templateUrl: './col-list.component.html',
  styleUrls: ['./col-list.component.less']
})
export class ColListComponent implements OnInit {

  list: Skills[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.list = this.skillsService.getSkills();
  }

}
