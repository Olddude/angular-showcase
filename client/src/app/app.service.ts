import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private readonly http: HttpClient
  ) { }

  fetchApi(): Observable<any> {
    return this.http.get(environment.api).pipe(
      map(response => response as any)
    );
  }

}
