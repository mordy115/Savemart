import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { AddressService } from 'src/app/service/address/address.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {
  address:any;
  id!:number;
  addressform;
  id_User!:number;
  constructor(private address_service:AddressService , private fb:FormBuilder
    , private route: ActivatedRoute , private _router:Router ) {
    this.addressform = fb.group({
      country:['',[Validators.required ]],
      street_name:['',[Validators.required ]],
      city:['',[Validators.required ]],
      phone:['',[Validators.required ]]
    })


  }

  ngOnInit(): void {
    this.id_User = Number(localStorage.getItem('id_User'))?Number(localStorage.getItem('id_User')):0;
    this.route.paramMap.subscribe((parms)=>{
      this.id =Number(parms.get('id'))
    });
    this.address_service.getAddressById(this.id_User).subscribe(
      (response)=>{
        this.address = response;
       },
       (error)=>{
       console.log(error);
       }
    )
  }
  editaddress(form:any){
    if ( !(form.controls['country'].errors || form.controls['street_name'].errors || form.controls['city'].errors || form.controls['phone'].errors)){
      this.address_service.editAddress({country:form.value.country, street_name:form.value.street_name,
      city:form.value.city,phone:form.value.phone} , this.id,this.id_User).subscribe(
        (response)=>{
          console.log(response);
          },
          (error)=>{
            console.error(error)
          }
      )
      this._router.navigate(['/address'])
    }else{
      alert("please fill form ")
    }
  }
}
