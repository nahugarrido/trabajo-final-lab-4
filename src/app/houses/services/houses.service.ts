import { Injectable } from '@angular/core';
import { House } from '../models/house.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HousesService {
  private baseURL = environment.backendURL + '/houses';

  constructor(private http: HttpClient) {}

  createHouse(house: House) {
    let userId = sessionStorage.getItem('active-user');
    if (userId) {
      house.user_id = parseInt(userId);
      return this.http
        .post<House>(this.baseURL, house)
        .pipe(retry(1), catchError(this.handleError));
    } else {
      return new Observable<House>();
    }
  }

  getHouses(): Observable<House[]> {
    return this.http
      .get<House[]>(this.baseURL)
      .pipe(retry(1), catchError(this.handleError));
  }

  getHousesByActiveUser(): Observable<House[]> {
    let userId = sessionStorage.getItem('active-user');
    if (userId) {
      return this.http
        .get<House[]>(this.baseURL + `?user_id=${userId}`)
        .pipe(retry(1), catchError(this.handleError));
    } else {
      return new Observable<House[]>();
    }
  }

  findHouseById(id: number): Observable<House> {
    return this.http
      .get<House>(this.baseURL + `/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteHouseById(id: number): Observable<any> {
    return this.http
      .delete<any>(this.baseURL + `/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  updateHouseById(house: House, id: number): Observable<House> {
    return this.http
      .put<House>(this.baseURL + `/${id}`, house)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(err: any) {
    console.log(err);
    return throwError(() => {
      return err.error.message;
    });
  }
}
