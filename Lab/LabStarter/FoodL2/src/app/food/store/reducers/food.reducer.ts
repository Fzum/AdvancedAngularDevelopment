import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { FoodItem } from '../../food.model';
import { FoodActions, FoodActionTypes } from '../actions/food.actions';

export const foodFeatureKey = 'food';

export interface FoodState extends EntityState<FoodItem> {}

export const foodAdapter: EntityAdapter<FoodItem> = createEntityAdapter<
  FoodItem
>();

export const defaultFoodState: FoodState = {
  ids: [],
  entities: {}
};

export const initialState = foodAdapter.getInitialState(defaultFoodState);

export function FoodReducer(
  state = initialState,
  action: FoodActions
): FoodState {
  switch (action.type) {
    case FoodActionTypes.LoadFoods: {
      return state;
    }
    case FoodActionTypes.LoadFoods_Success: {
      return foodAdapter.addAll(action.payload, {
        ...state
      });
    }
    case FoodActionTypes.LoadFoods_Error: {
      return { ...state };
    }
    default:
      return state;
  }
}
