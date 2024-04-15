// Angular
import { APP_INITIALIZER, InjectionToken, Provider, inject } from "@angular/core";

// Rx
import { exhaustMap, mergeAll, tap } from "rxjs";

// Project
import { EnvConfig } from "./config";
import { ConfigService } from "./config.service";
import { APP_WITH_CONFIG, APP_WITH_CONFIG_ASYNC } from "./with-config.provider";

export const ENV_CONFIG = new InjectionToken<EnvConfig>("config");

export function provideConfigInitializer(): Provider {
  return {
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: () => {
      const configService = inject(ConfigService);
      const services = inject(APP_WITH_CONFIG);
      const initializeFns = inject(APP_WITH_CONFIG_ASYNC, { optional: true }) || [];

      return () =>
        configService.load().pipe(
          tap(config => {
            for (const service of services) {
              service.configure(config);
            }
          }),
          exhaustMap(config => initializeFns.map(initializeFn => initializeFn(config))),
          mergeAll()
        );
    },
  };
}
