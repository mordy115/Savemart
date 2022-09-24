import { Component, OnInit } from '@angular/core';
import { Validators , FormBuilder, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginService } from 'src/app/service/login/auth-login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Registerform;
  users:any =[]
  constructor( private fb:FormBuilder ,private Auth_login:AuthLoginService,
    private router: Router,) {
    this.Registerform = fb.group({
      name:['',[Validators.required ,Validators.minLength(6),this.isValidName]],
      email:['',
      [ Validators.required,
        Validators.email,
        Validators.minLength(5),
      ]],
      password:['',[Validators.required ,Validators.minLength(8),this.isValidPassword]],
     })

  }
  createForm(form:any){
    let user = this.users.filter((el:any)=>{
      return el.email=== form.value.email
    })

      if ( !(this.Registerform.controls['name'].errors && this.Registerform.controls['email'].errors && this.Registerform.controls['email'].errors)){
        if(user.length === 0){
          this.Auth_login.postdate(form.value.name , form.value.email ,form.value.password).subscribe(
          (response)=>{
          console.log(response);
          },
          (error)=>{
            console.error(error)
          }
          )
          this.router.navigate(['/login']);
        }else{
          alert("this email registered")
        }
      }else{
        alert("mordy")
      }




  }
  isValidName(control:AbstractControl):any{
   const reg = new RegExp(/^\d/)
   if(reg.test(control.value)){
    return{
      forbidden:"this field should not number"
    }
   }
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
  ngOnInit(): void {
    this.Auth_login.getdate().subscribe(
      response=>{
       this.users = response;
      },
      (error)=>{
      console.log(error);
      }
     );

  }

}
