import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseURL:string ="https://6325d6404cd1a2834c457d24.mockapi.io/user/" ;
  constructor( private http:HttpClient) { }
  postOrder(Data:{} , id :number):Observable<any>{
    return this.http.post(this.baseURL+id +"/order",Data).pipe(catchError(this.handleError))
  }
  getOrderByIdUser(id:number):Observable<any>{
    return this.http.get(this.baseURL+id+"/order")
  }
  deletOrder(idUser:number , idOrder:number):Observable<any>{
    return this.http.delete(this.baseURL+idUser+"/order/"+idOrder).pipe(catchError(this.handleError))
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
