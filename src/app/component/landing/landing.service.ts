import { Injectable, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LandingService {

  constructor(private http: HttpClient) { }

  getData(url): Observable<any> {
    return this.http.get(url).map((res) => {
      return res;
    })
  }
}
