import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { AddressService } from 'src/app/service/address/address.service';
import { OrderService } from 'src/app/service/order/order.service';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {
  dataCart:Cart[]=[];
  order_number:number=0;
  Total_price =0;
  address:any;
  id_user!:number;

  constructor(private address_service:AddressService , private router: Router
    , private order_service:OrderService ) {
    this.dataCart = JSON.parse(`${localStorage.getItem('dataCart')}`)
    this.order_number = Number(localStorage.getItem('numberCart'));

  }

  ngOnInit(): void {
    if(this.dataCart !== null){
      let arr = []
      for(let i=0 ;i<this.dataCart.length ;i++){
         arr.push(this.dataCart[i].price * this.dataCart[i].quantity)
        if(this.dataCart[i].quantity < 1){
          this.dataCart[i].quantity = 1
        }
      }
       this.Total_price = arr.reduce((previousValue, currentValue) => previousValue + currentValue);
    }
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

  delete(id:number){
    let deleteproduct = this.dataCart.filter(el=>el.id !==id);
    if(window.confirm("Do you want to delete this product?")){
    this.dataCart = deleteproduct;
    localStorage.setItem('dataCart', JSON.stringify(deleteproduct));
    this.order_number-- ;
    localStorage.setItem('numberCart', JSON.stringify(this.order_number));
    if(this.order_number === 0){
      localStorage.clear()
    }
    location.reload()
    }

  }
  confirm_order(){
    for(let i=0; i<this.dataCart.length;i++){
      this.order_service.postOrder({
        name:this.dataCart[i].name ,
        title:this.dataCart[i].title ,
        price:this.dataCart[i].price ,
        quantity:this.dataCart[i].quantity ,
        img1:this.dataCart[i].img1,
        img2:this.dataCart[i].img2,
      } , this.id_user).subscribe()
    }
    localStorage.setItem('dataCart',JSON.stringify([]));
    localStorage.setItem('numberCart',JSON.stringify(0));
    location.reload()
  }
}
