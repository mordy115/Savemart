import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/service/address/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  address:any;
  id_user!:number;
  addressform;
  constructor(private address_service:AddressService , private fb:FormBuilder
    , private router: Router ) {
    this.addressform = fb.group({
      country:['',[Validators.required ]],
      street_name:['',[Validators.required ]],
      city:['',[Validators.required ]],
      phone:['',[Validators.required ]]
    })

  }

  ngOnInit(): void {
    this.id_user = Number(localStorage.getItem('id_User'))?Number(localStorage.getItem('id_User')):0;
    this.address_service.getAddressById(this.id_user).subscribe(
      (response)=>{
        this.address = response;
       },
       (error)=>{
       console.log(error);
       }
    )
  }

  createaddress(form:any){
    if ( !(form.controls['country'].errors || form.controls['street_name'].errors || form.controls['city'].errors || form.controls['phone'].errors)){
      this.address_service.postaddress( {country:form.value.country, street_name:form.value.street_name,
        city:form.value.city,phone:form.value.phone , userId:this.id_user} , this.id_user).subscribe(
          (response)=>{
            console.log(response);
            },
            (error)=>{
              console.error(error)
            }
        )
      this.router.navigate(['/confirmOrder'])
    }else{
      alert("please fill form ")
    }

  }
}
