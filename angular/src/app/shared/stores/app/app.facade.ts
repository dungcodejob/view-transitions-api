import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppActions } from "./app.action";
import { appFeature } from "./app.reducers";

@Injectable({ providedIn: "root" })
export class AppFacade {
  private readonly _store = inject(Store);

  readonly $loading = this._store.selectSignal(appFeature.selectLoading);
  readonly $language = this._store.selectSignal(appFeature.selectLanguage);

  switchLanguage(language: string): void {
    this._store.dispatch(AppActions.switchLanguages({ language }));
  }
}
