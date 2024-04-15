// Angular
import { InjectionToken, StaticProvider, Type } from "@angular/core";
// Rx
import { Observable } from "rxjs";

// Project
import { EnvConfig } from "./config";

export const APP_WITH_CONFIG = new InjectionToken<Configurable[]>("configurable");

export interface Configurable {
  configure(config: EnvConfig): void;
}

export function provideWithConfig<T extends Configurable>(
  configurable: Type<T>
): StaticProvider {
  return {
    provide: APP_WITH_CONFIG,
    multi: true,
    useExisting: configurable,
  };
}

export const APP_WITH_CONFIG_ASYNC = new InjectionToken<
  readonly ((config: EnvConfig) => Observable<unknown>)[]
>("APP_INITIALIZER with sync access to config");
