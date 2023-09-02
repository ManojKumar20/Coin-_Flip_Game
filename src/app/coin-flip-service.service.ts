import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinFlipServiceService {

  constructor(private http: HttpClient) { }

  public fetchData():Observable<any> {

    return this.http.get('http://localhost:5000/api/FlipCoin').pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
