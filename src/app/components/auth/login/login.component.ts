import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginService } from 'src/app/service/login/auth-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  is_login_in:boolean=false;
  users:any=[];
  constructor(
    private Auth_login:AuthLoginService,
    private router: Router,
  ) {
  }

   ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        this.isValidPassword,
      ]),
    });
    this.Auth_login.getdate().subscribe(
      response=>{
       this.users = response;
      },
      (error)=>{
      console.log(error);
      }
     );


  }

  isValidPassword(control: AbstractControl): any {

    if (control.value) {
      const regex = /^[A-Z]/  ;
      if (regex.test(control.value)) {
        return { invalidPassword: true };
      }
    }
  }


  login(form:any) {
    let user = this.users.filter((el:any)=>{
      return el.email=== form.value.email && el.password === form.value.password
    })
    if(user.length !==0){
      form.status = "VALID";
      if (form.status = "VALID") {
        this.is_login_in = true;
        localStorage.setItem('is_login_in', String(this.is_login_in));
        localStorage.setItem('id_User', String(user[0].id));
        location.reload()
      }
    }else{
      alert("no user");
    }
  }


}
