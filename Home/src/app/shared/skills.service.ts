import { Injectable } from '@angular/core';
import { Skills } from '../home/col-list/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills(): Skills[]{
    return SKILLS;
  }
}

const SKILLS: Skills[] = [
  { name: 'Front-End Development', subset: ['HTML5, CSS3, Less, Sass, Javascript, jQuery, React, Angular, Java, Spring, PHP'] },
  { name: 'Back-End Development', subset: ['Java, Spring, PHP, C#'] },
  { name: 'Agile Methodology' },
  { name: 'Mobile & Responsive Design' },
  { name: 'Iterative & Rapid Development' },
  { name: 'Documentation Production' },
  { name: 'UX/UI Design' },
  { name: 'Graphic Design' },
  { name: 'Programming' , subset: ['Java, C++, Python, MATLAB'] },
  { name: 'User Research Methodology', subset: ['Card Sorting, A/B Testing, Focus groups, Clickstream analysis, and more...'] },

];
