import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/service/login/auth-login.service';

@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styleUrls: ['./ordered.component.css']
})
export class OrderedComponent implements OnInit {
  id_User:number=0;
  users=[]
  user:any;
  name:any;
  constructor(
    private Auth_login:AuthLoginService,
  ) {
    console.log(this.users);
   }

  ngOnInit(): void {
    this.id_User = Number(localStorage.getItem('id_User'))?Number(localStorage.getItem('id_User')):0;
  }

}
