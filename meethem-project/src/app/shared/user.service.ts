import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../classes/user';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:8080/user';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    let API_URL = `${this.url}/show`;
    
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: any) => {
          return res.result || {}
        }),
        catchError(this.errorMgmt)
      )
   }

   addUser(data: User): Observable<any>{
    let API_URL = `${this.url}/save`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
   }

   getUser(userid :number): Observable<any>{
    let API_URL = `${this.url}/${userid}`;
    return this.httpClient.get(API_URL, { headers: this.headers })
    .pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
    // return this.http.get(`${this.url}/getOne/${id}`);
   }

   updateUser(userid: number, data: User): Observable<any>{
    let API_URL = `${this.url}/${userid}`;
    return this.httpClient.put(API_URL, data)
      .pipe(
        map((res: any) => {
          return console.log("service :" + res.result);
        }),
        catchError(this.errorMgmt)
      );
  }

  deleteUser(userid: number): Observable<any> {
    var API_URL = `${this.url}/${userid}`;
    return this.httpClient.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
