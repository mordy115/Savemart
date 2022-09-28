import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  baseURL:string ="https://6325d6404cd1a2834c457d24.mockapi.io/user" ;
  users = []
  constructor(private http:HttpClient ) {
   }

  getdate():Observable<any>{
    return this.http.get(this.baseURL)
  }
  postdate(name:string , email:string ,password:string):Observable<any>{
    return this.http.post(this.baseURL, {name:name, email: email , password:password}).pipe(catchError(this.handleError))
  }
  editpassword(id:number, editpassword:string):Observable<any>{
    return this.http.put(this.baseURL+"/"+id  , {password:editpassword}).pipe(catchError(this.handleError))
  }
  getUserById(id:number):Observable<any>{
    return this.http.get(this.baseURL+"/"+id)
  }
  handleError(error:HttpErrorResponse){
      let errorMessage = "";
      if(error.error instanceof ErrorEvent){
        errorMessage = error.error.message
      }else{
        errorMessage = `Error Code: ${error.status}\n MEssage: ${error.message}`
      }
    return throwError(errorMessage);
  }
}
