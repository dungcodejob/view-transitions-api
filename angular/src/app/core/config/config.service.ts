// Angular
import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

// Rx
import { Observable, Subject, tap } from "rxjs";

// Project
import { EnvConfig } from "./config";

@Injectable({ providedIn: "root" })
export class ConfigService {
  private readonly _http = inject(HttpClient);
  private readonly _configSubject = new Subject<EnvConfig>();

  readonly config$ = this._configSubject.asObservable();
  config!: EnvConfig;

  load(): Observable<EnvConfig> {
    return this._http.get<EnvConfig>("configuration/config.json").pipe(
      tap(config => {
        console.log(`[ConfigService]: config value ${JSON.stringify(config)}`);
        this._configSubject.next(config);
        this.config = config;
      })
    );
  }
}
