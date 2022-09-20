import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productservice;
  id:any;
  product:any;
  Cart:Cart[]=[];
  number:number=0;

  constructor(private route:ActivatedRoute) {
    this.productservice = new ProductService ;
    this.Cart = localStorage.length>0 ? JSON.parse(`${localStorage.getItem('dataCart')}`) : [];
    this.number = localStorage.length>0 ? Number(localStorage.getItem('numberCart')) : 0;
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parms)=>{
      this.id =parms.get('id')
    });
    this.product = this.productservice.getproductById(Number(this.id))
    console.log(this.product);

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
