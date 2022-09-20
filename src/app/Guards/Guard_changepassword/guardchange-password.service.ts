import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardchangePasswordService {
  id_User:number=0;
  constructor(private _router:Router) {
    this.id_User = Number(localStorage.getItem('id_User'))?Number(localStorage.getItem('id_User')):0;
  }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean{
    let route_a :boolean;
    if(this.id_User === 0){
       route_a = false;
       this._router.navigate(["/"])
    }else{
      route_a = true;
    }
    return route_a
  }
}
