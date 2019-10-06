import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Skill } from "../store/models/skill.model";
import { SkillsState, getAllSkills } from "../store/reducers/skill.reducer";

@Component({
  selector: "app-skills-kpi",
  templateUrl: "./skills-kpi.component.html",
  styleUrls: ["./skills-kpi.component.scss"]
})
export class SkillsKpiComponent implements OnInit {
  constructor(private store: Store<SkillsState>) {}

  skills$: Observable<Array<Skill>> = this.store.select(getAllSkills);

  ct: number;

  ngOnInit() {
    //ToDO: Refactor to declarative approach
    // Write rxjs to calculate total & completed
    // Remove this afterwards
    this.store.select(getAllSkills).subscribe(data => (this.ct = data.length));
  }
}
