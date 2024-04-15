import { ApplicationConfig, importProvidersFrom, inject, isDevMode } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  ViewTransitionInfo,
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from "@angular/router";
import { provideConfigInitializer, provideWithConfig } from "@core/config";
import { LogService } from "@core/logger";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { PadIconModule } from "pad-ui-lib/icon";
import { routes } from "./app.routes";

import { CurrentTransitionService } from "@core/services";
import { appFeature } from "@shared/stores/app";

const onViewTransitionCreated = (info: ViewTransitionInfo) => {
  console.log(info);
  const currentTransitionService = inject(CurrentTransitionService);
  currentTransitionService.currentTransition.set(info);
  // Update current transition when animation finishes
  info.transition.finished.finally(() => {
    currentTransitionService.currentTransition.set(null);
  });
};
export const initAppConfig = (): ApplicationConfig => {
  return {
    providers: [
      importProvidersFrom([PadIconModule.forRoot(), BrowserAnimationsModule]),
      provideWithConfig(LogService),
      provideConfigInitializer(),

      provideStore({
        [appFeature.name]: appFeature.reducer,
      }),
      provideStoreDevtools({
        maxAge: 25, // Retains last 25 states
        logOnly: !isDevMode(), // Restrict extension to log-only mode
        autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
        traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      }),
      provideStoreDevtools(),
      provideRouter(
        routes,
        withComponentInputBinding(),
        withViewTransitions({ onViewTransitionCreated })
      ),
    ],
  };
};
