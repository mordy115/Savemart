import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-flash-deals',
  templateUrl: './flash-deals.component.html',
  styleUrls: ['./flash-deals.component.css']
})
export class FlashDealsComponent implements OnInit {
  productservice;
  prodects_flash_deals:Product[]=[]
  Cart:Cart[]=[];
  number=0;
  constructor() {
    this.productservice = new ProductService;
    this.prodects_flash_deals = this.productservice.prodects_flash_deals;
    this.Cart = localStorage.length>0 ? JSON.parse(`${localStorage.getItem('dataCart')}`) : [];
    this.number = localStorage.length>0 ? Number(localStorage.getItem('numberCart')) : 0;
  }

  ngOnInit(): void {
  }
  getprodect(id:number){
    let product = this.prodects_flash_deals.filter(el=>el.id===id);
    let ifcart = this.Cart.filter(el=>el.id===id);
    if(ifcart.length ===0){
      this.Cart[this.number] = product[0];
      this.number++
    }else{
      alert("the product in the cart ")
    }
    localStorage.setItem('dataCart', JSON.stringify(this.Cart));
    localStorage.setItem('numberCart', JSON.stringify(this.number));
    location.reload()
  }
  search(name:string){
    location.replace(`/search?search=${name}&catégories=All`);
  }

}
