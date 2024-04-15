import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ConfigService } from "@core/config";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class HttpService {
  readonly http = inject(HttpClient);
  readonly baseUrl = inject(ConfigService).config.baseUrl;
  readonly headers = new HttpHeaders({ "Content-Type": "application/json" });
  readonly options = { headers: this.headers, withCredentials: true };

  get<T>(
    url: string,
    options?: { headers?: HttpHeaders; params?: HttpParams }
  ): Observable<T> {
    return this.http.get<T>(this.baseUrl + url, {
      ...this.options,
      ...options,
    });
  }

  put<T, K = unknown>(
    url: string,
    body: K,
    options?: { headers?: HttpHeaders; params?: HttpParams }
  ): Observable<T> {
    return this.http.put<T>(this.baseUrl + url, body, {
      ...this.options,
      ...options,
    });
  }

  post<T, K = unknown>(
    url: string,
    body: K,
    options?: { headers?: HttpHeaders; params?: HttpParams }
  ): Observable<T> {
    return this.http.post<T>(this.baseUrl + url, body, {
      ...this.options,
      ...options,
    });
  }

  delete<T>(
    url: string,
    options?: { headers?: HttpHeaders; params?: HttpParams }
  ): Observable<T> {
    return this.http.delete<T>(this.baseUrl + url, {
      ...this.options,
      ...options,
    });
  }
}
