import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  key_words:any;
  categorie:any;
  productservice;
  product:Product[]=[];
  Cart:Cart[]=[];
  number:number=0;
  constructor() {
    this.productservice = new ProductService;
    this.Cart = localStorage.length>0 ? JSON.parse(`${localStorage.getItem('dataCart')}`) : [];
    this.number = localStorage.length>0 ? Number(localStorage.getItem('numberCart')) : 0;
   }

  ngOnInit(): void {
    console.log(window.location.origin);
    const params = new URLSearchParams(window.location.search)
    this.key_words= params.get('search');
    this.categorie= params.get('catégories');
    this.getProductByName();
    console.log(this.product);

  }
 getProductByName(){

  let search = this.productservice.all_products.filter(el=>el.categore_name ===this.categorie);
  if(this.categorie === "All"){
      search = this.productservice.all_products
  }


  this.product  = search.filter(el=> el.name.includes(this.key_words));
   return this.product
 }
 getprodect(id:number){
  let ifcart = this.Cart.filter(el=>el.id===id);
  if(ifcart.length ===0){
    this.Cart[this.number] =this.product[0];
    this.number++
  }else{
    alert("the product in the cart ")
  }
  localStorage.setItem('dataCart', JSON.stringify(this.Cart));
  localStorage.setItem('numberCart', JSON.stringify(this.number));
  location.reload()
}
}
