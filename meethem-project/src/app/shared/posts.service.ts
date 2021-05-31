import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post } from '../classes/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url: string = 'http://localhost:8080/post';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Post[]>{
    let API_URL = `${this.url}/show`;
    
    return this.httpClient.get(API_URL)
      .pipe(
        map((res: any) => {
          return res.result || {}
        }),
        catchError(this.errorMgmt)
      )
   }

   addPost(data: Post): Observable<any>{
    let API_URL = `${this.url}/save`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
   }

   getPost(postid :number): Observable<any>{
    let API_URL = `${this.url}/${postid}`;
    return this.httpClient.get(API_URL, { headers: this.headers })
    .pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
    // return this.http.get(`${this.url}/getOne/${id}`);
   }

   updatePost(postid: number, data: Post): Observable<any>{
    let API_URL = `${this.url}/${postid}`;
    return this.httpClient.put(API_URL, data)
      .pipe(
        map((res: any) => {
          return console.log("service :" + res.result);
        }),
        catchError(this.errorMgmt)
      );
  }

  deletePost(postid: number): Observable<any> {
    var API_URL = `${this.url}/${postid}`;
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
