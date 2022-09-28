import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  baseURL:string ="https://6325d6404cd1a2834c457d24.mockapi.io/user/" ;
  constructor( private http:HttpClient) { }
  postaddress(Data:{} , id :number):Observable<any>{
    return this.http.post(this.baseURL+id +"/addresses",Data).pipe(catchError(this.handleError))
  }
  getAddressById(id:number){
    return this.http.get(this.baseURL+id+"/addresses")
  }
  editAddress(Data:{} , id :number,id_User:number){
    return this.http.put(this.baseURL+id_User +"/addresses/"+id,Data).pipe(catchError(this.handleError))
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
