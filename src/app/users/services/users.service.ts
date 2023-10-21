import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseURL = environment.backendURL;

  constructor(private http: HttpClient) {}

  createuser(user: User) {
    return this.http
      .post<User>(this.baseURL + '/users', user)
      .pipe(retry(1), catchError(this.handleError));
  }

  getusers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.baseURL + '/users')
      .pipe(retry(1), catchError(this.handleError));
  }

  finduserById(id: number): Observable<User> {
    return this.http
      .get<User>(this.baseURL + `/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteuserById(id: number): Observable<any> {
    return this.http
      .delete<any>(this.baseURL + `${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  updateuserById(user: User, id: number): Observable<User> {
    return this.http
      .put<User>(this.baseURL + `${id}`, user)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(err: any) {
    console.log(err);
    return throwError(() => {
      return err.error.message;
    });
  }
}
