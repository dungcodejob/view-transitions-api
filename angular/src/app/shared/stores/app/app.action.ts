import { createAction, props } from "@ngrx/store";

enum AppActionTypes {
  ShowLoading = "[APP] Show Loading",
  HideLoading = "[APP] Hide Loading",
  SwitchLanguages = "[APP] Switch Language",
}

const showLoading = createAction(AppActionTypes.ShowLoading);
const hideLoading = createAction(AppActionTypes.HideLoading);
const switchLanguages = createAction(
  AppActionTypes.SwitchLanguages,
  props<{ language: string }>()
);

export const AppActions = { showLoading, hideLoading, switchLanguages };
