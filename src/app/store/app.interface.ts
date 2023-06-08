import { createSelector } from "@ngrx/store";

export interface IApp {
  // username: string;
  // password: string;
  // authenticationMessage: string;
  products:[]
}

export interface IAppState {
  AppState: IApp;
}

export const initialAppState: IApp = {
  products:[]
};

export const selectFeature = (state: IAppState) => state.AppState;

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: any) => state.AppState
);
