import { SkillActions, SkillActionTypes } from "../actions/skill.actions";
import { Skill } from "../models/skill.model";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
  EntityState,
  EntityAdapter,
  createEntityAdapter,
  Update
} from "@ngrx/entity";

//Feature & Feature-State

export const skillFeatureKey = "skills";

export interface SkillsState extends EntityState<Skill> {
  //Note: We dont need this any more - provided by EntityState<T>
  // skills: Skill[];
  loading: boolean;
  loaded: boolean;
}

//Entity

export const skillAdapter: EntityAdapter<Skill> = createEntityAdapter<Skill>();
export const defaultSkillState: SkillsState = {
  ids: [],
  entities: {},
  loading: false,
  loaded: false
};

export const initialState = skillAdapter.getInitialState(defaultSkillState);

//Slices
//Note: state.kills -> state.entities
export const getSkillsLoaded = (state: SkillsState) => state.loaded;
export const getSkills = (state: SkillsState) => state.entities;

//Selectors

export const getSkillsState = createFeatureSelector<SkillsState>(
  skillFeatureKey
);

//Note: Selector refactor to use Entity
export const getSkillsEntities = createSelector(
  getSkillsState,
  skillAdapter.getSelectors().selectAll
);

//Note: State now looks like this ....
// let stateStructure: {
//   "ids": [
//     "123",
//     "456"
//   ],
//   "entities": {
//     "123": {
//       "id": "123",
//       "name": "rxjs from api",
//       "completed": true
//     },
//     "456": {
//       "id": "456",
//       "name": "ngrx from api",
//       "completed": false
//     }
//   },
//   "loading": false,
//   "loaded": true
// }

//Note: Make this structure iterable again for the template
export const getAllSkills = createSelector(
  getSkillsEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

//Reducer

//Note: state.kills -> state.entities, now using adapter-methods: allAll, addOne, ....
export function SkillReducer(
  state: SkillsState = initialState,
  action: SkillActions
) {
  switch (action.type) {
    case SkillActionTypes.LoadSkills: {
      return { ...state, loading: true };
    }
    case SkillActionTypes.LoadSkills_Success: {
      return skillAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case SkillActionTypes.LoadSkills_Error: {
      return { ...state, loaded: false, loading: false };
    }
    case SkillActionTypes.AddSkill:
      return skillAdapter.addOne(action.payload, { ...state });
    case SkillActionTypes.DeleteSkill:
      return skillAdapter.removeOne(action.payload.id, { ...state });
    case SkillActionTypes.ToggleComplete:
      let updateSkill: Update<Skill> = {
        id: action.payload.id,
        changes: { completed: !action.payload.completed }
      };
      return skillAdapter.updateOne(updateSkill, { ...state });
    default:
      return state;
  }
}
