import { Injectable } from '@angular/core';
import { House } from '../models/house.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class HousesService {
  private baseURL = environment.backendURL;

  constructor(private http: HttpClient) {}

  createHouse(house: House) {
    return this.http
      .post<House>(this.baseURL + '/houses', house)
      .pipe(retry(1), catchError(this.handleError));
  }

  getHouses(): Observable<House[]> {
    return this.http
      .get<House[]>(this.baseURL + '/houses')
      .pipe(retry(1), catchError(this.handleError));
  }

  findHouseById(id: number): Observable<House> {
    return this.http
      .get<House>(this.baseURL + `/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteHouseById(id: number): Observable<any> {
    return this.http
      .delete<any>(this.baseURL + `${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  updateHouseById(house: House, id: number): Observable<House> {
    return this.http
      .put<House>(this.baseURL + `${id}`, house)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(err: any) {
    console.log(err);
    return throwError(() => {
      message: err.error.message;
    });
  }
}
