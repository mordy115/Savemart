import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {
  prodects_new_arrivals:Product[]=[];
  prodects_new_arrivals_two:Product[]=[];
  prodects_new_arrivals_three:Product[]=[];
  productservice;
  cart:Product[]=[]
  constructor() {
    this.productservice = new ProductService;
    for(let i=0;i<12;i++){
      if(i >= 6){
        this.prodects_new_arrivals_two[i-6] = this.productservice.prodects_new_arrivals[i]
      }else{
        this.prodects_new_arrivals[i] = this.productservice.prodects_new_arrivals[i]
      }
    }
    this.prodects_new_arrivals_three = this.prodects_new_arrivals;
    this.cart =localStorage.length>0 ? JSON.parse(`${localStorage.getItem('dataCart')}`) : [];
    this.number =localStorage.length>0 ? Number(localStorage.getItem('numberCart')):0;

  }

  ngOnInit(): void {
  }

  next(){
      this.prodects_new_arrivals_three=this.prodects_new_arrivals_two;
  }
  back(){
    this.prodects_new_arrivals_three = this.prodects_new_arrivals;
  }
  number = 0;
  getprodect(id:number){
    let prodect = this.prodects_new_arrivals_three.filter(el=>el.id===id);
    let ifcart = this.cart.filter(el=>el.id===id);
    if(ifcart.length ===0){
      this.cart[this.number] = prodect[0];
      this.number++
    }else{
      alert("the product in the cart ")
    }
    localStorage.setItem('dataCart', JSON.stringify(this.cart));
    localStorage.setItem('numberCart', JSON.stringify(this.number));
    location.reload()
  }
  search(name:string){
    location.replace(`/search?search=${name}&catégories=All`);
  }
}
