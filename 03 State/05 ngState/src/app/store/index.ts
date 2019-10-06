import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { AppState, AppReducer } from "./reducers/app.reducer";

export interface State {
  app: AppState;
}

export const reducers: ActionReducerMap<State> = {
  app: AppReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
