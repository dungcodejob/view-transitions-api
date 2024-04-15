import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { CatDto } from "@shared/models/cat.dto";
import { Observable } from "rxjs";

export interface ICatApi {
  findAll(): Observable<CatDto[]>;
}

@Injectable({ providedIn: "root" })
export class CatApi {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl!: string;
  constructor() {}

  findAll(): Observable<CatDto[]> {
    return this._http.get<CatDto[]>(this._baseUrl + "/cat");
  }
}
