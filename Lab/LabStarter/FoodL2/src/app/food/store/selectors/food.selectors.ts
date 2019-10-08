import {
  foodFeatureKey,
  foodAdapter,
  FoodState
} from '../reducers/food.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getFoodState = createFeatureSelector<FoodState>(foodFeatureKey);

export const getFoodEntities = createSelector(
  getFoodState,
  foodAdapter.getSelectors().selectAll
);
