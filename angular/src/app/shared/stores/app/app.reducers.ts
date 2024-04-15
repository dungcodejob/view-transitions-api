import { createFeature, createReducer, on } from "@ngrx/store";
import { FeatureKeys } from "@shared/constants";
import { AppActions } from "./app.action";
import { initialState } from "./app.state";

export const appFeature = createFeature({
  name: FeatureKeys.App,
  reducer: createReducer(
    initialState,
    on(AppActions.switchLanguages, (state, { language }) => ({
      ...state,
      language,
    })),
    on(AppActions.showLoading, state => ({
      ...state,
      loading: true,
    })),
    on(AppActions.hideLoading, state => ({
      ...state,
      loading: false,
    }))
  ),
});
