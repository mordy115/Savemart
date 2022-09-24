import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dataCart:Cart[]=[];
  order_number:number=0;
  Total_price =0;
  name:any;
  constructor() {
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
    console.log(this.Total_price);

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
  total(){
    if(this.dataCart !== null){
      let arr = []
      for(let i=0 ;i<this.dataCart.length ;i++){

        if(this.dataCart[i].quantity < 1){
          this.dataCart[i].quantity = 1;
          arr.push(this.dataCart[i].price * 1)
        }else{
          arr.push(this.dataCart[i].price * this.dataCart[i].quantity);
          localStorage.setItem('dataCart', JSON.stringify(this.dataCart));

        }
      }
       this.Total_price = arr.reduce((previousValue, currentValue) => previousValue + currentValue);
    }


  }
  confirmorder(){
    localStorage.removeItem("confirmorder")
  }

}
