import { SkillActions, SkillActionTypes } from "../actions/skill.actions";
import { Skill } from "../models/skill.model";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const skillFeatureKey = "skills";

export interface SkillsState {
  skills: Skill[];
  loading: boolean;
  loaded: boolean;
}

export const initialState = {
  skills: [],
  loaded: false,
  loading: false
};

//Slices

export const getSkillsLoaded = (state: SkillsState) => state.loaded;
export const getSkills = (state: SkillsState) => state.skills;

//Selectors

export const getSkillsState = createFeatureSelector<SkillsState>(
  skillFeatureKey
);

export const getSkillData = createSelector(
  getSkillsState,
  (state: SkillsState) => state.skills
);

//Reducer

//Note: Added the "Load"-related parts to reducer
export function SkillReducer(
  state: SkillsState = initialState,
  action: SkillActions
) {
  switch (action.type) {
    case SkillActionTypes.LoadSkills: {
      return { ...state, loading: true };
    }
    case SkillActionTypes.LoadSkills_Success: {
      return { ...state, skills: action.payload, loaded: true, loading: false };
    }
    case SkillActionTypes.LoadSkills_Error: {
      return { ...state, loaded: false, loading: false };
    }
    case SkillActionTypes.AddSkill:
      let arrAdd = [...state.skills, action.payload];
      console.log("arr after add:", arrAdd);
      return { ...state, skills: arrAdd };
    case SkillActionTypes.DeleteSkill:
      let arrDel = state.skills.filter(s => s.id != action.payload.id);
      console.log("arr after delete:", arrDel);
      return { ...state, skills: arrDel };
    case SkillActionTypes.ToggleComplete:
      //Note: Uncomment code - think why this throws an err - correct it if you like
      // let changed = state.skills.find(s => s.id == action.payload.id);
      // if (changed != null) changed.completed = !changed.completed;
      return { ...state };
    default:
      return state;
  }
}
