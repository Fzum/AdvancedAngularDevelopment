import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Skill } from './skill.model';
import { SkillsService } from './skills.service';

@Component({
  selector: 'ngxe-skillslist',
  templateUrl: './skillslist.component.html',
  styleUrls: ['./skillslist.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SkillslistComponent implements OnInit {
  skills: Skill[];
  skillToAdd: string;

  constructor(private service: SkillsService) {}

  ngOnInit() {
    this.service.getSkills().subscribe(data => {
      console.log('Data from service', data);
      this.skills = data;
    });
  }

  removeSkill(s: Skill) {
    this.service.deleteSkill(s);
  }

  addSkill() {
    let sk: Skill = {
      id: this.skills.length + 1,
      name: this.skillToAdd,
      hours: 4,
      completed: false
    };
    this.service.addSkill(sk);
  }
}
