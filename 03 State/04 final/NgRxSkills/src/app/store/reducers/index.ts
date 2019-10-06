import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as fromSkills from "src/app/skills/store/reducers/skill.reducer";
import { environment } from "src/environments/environment.prod";

export interface AppState {
  skills: fromSkills.SkillsState;
}

export const reducers: ActionReducerMap<AppState> = {
  skills: fromSkills.SkillReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
