import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { AuthLoginService } from 'src/app/service/login/auth-login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changeform;
  id_User:number=0;
  user:any;
  constructor(private fb:FormBuilder ,private Auth_login:AuthLoginService) {
    this.changeform = fb.group({
      oldpassword:['',[Validators.required ,Validators.minLength(8),this.isValidPassword]],
      newpassword:['',[Validators.required ,Validators.minLength(8),this.isValidPassword]],
      confirmpassword:['',[Validators.required ,Validators.minLength(8),this.isValidPassword]],
     })
   }

  ngOnInit(): void {
    this.id_User = Number(localStorage.getItem('id_User'))?Number(localStorage.getItem('id_User')):0;
    this.Auth_login.getUserById(this.id_User).subscribe(
      (response)=>{
        this.user = response;
       },
       (error)=>{
       console.log(error);
       }
    )
  }
  isValidPassword(control: AbstractControl):any{
    if (control.value) {
      const reg = new RegExp(/^\[A-Z]/)   ;
      if (reg.test(control.value)) {
        return{
          forbidden:"this field should not number"
        }
      }
    }
  }
  changepassword(form:any){
    if ( !(this.changeform.controls['oldpassword'].errors && this.changeform.controls['newpassword'].errors && this.changeform.controls['confirmpassword'].errors)){
      if(this.user.password === form.value.oldpassword){
        if(form.value.newpassword === form.value.confirmpassword){
          if(form.value.newpassword !== ''){
            let newpassword = form.value.newpassword
            this.Auth_login.editpassword(this.id_User ,newpassword).subscribe();
            alert("Successed")
          }else{
            alert("please filled input new password")
          }
        }else{
          alert("the confirm password not matching")
        }
      }else{
        alert("Old Password is incorrect")
      }

    }else{
      alert("filled in the form")
    }
  }
}
