import { Component } from '@angular/core';
import { Cart } from './models/cart';
import { Product } from './models/product';
import { AuthLoginService } from './service/login/auth-login.service';

// @HostListener('scroll', ['$event']) // for scroll events of the current element


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app-first';
  hidden:any;
  dataCart:Product[]=[];
  order_number:number=0;
  Total_price =0;
  id_User:number=0;
  users=[]
  user:any;
  constructor(
    private Auth_login:AuthLoginService,
  ){
  this.scroll()
  }
 scrollFunction() {
  if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
    document.querySelector(".header-four")?.classList.add('block-nav');
  } else {
    document.querySelector(".header-four")?.classList.remove('block-nav') ;
  }}
  scroll(){
   window.onscroll = this.scrollFunction
  }

  ngOnInit() {
    window.onscroll = ()=>{
      this.scrollFunction()
    };
    this.dataCart = JSON.parse(`${localStorage.getItem('dataCart')}`)
    this.order_number = Number(localStorage.getItem('numberCart'));
    this.id_User = Number(localStorage.getItem('id_User'))?Number(localStorage.getItem('id_User')):0;
    console.log(this.id_User);
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
    this.Auth_login.getdate().subscribe(
      response=>{
       this.users = response;
       this.user = this.users.filter((el:any)=>Number(el.id)===Number(this.id_User))
      },
      (error)=>{
      console.log(error);
      }
     );

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
  search(){
    if(document.querySelector(".header-search")?.classList.length!==2){
      document.querySelector(".header-search")?.classList.remove('block-search')
    }else{
    document.querySelector(".header-search")?.classList.add('block-search')
    }
  }
  logout(){
    localStorage.removeItem("id_User");
    localStorage.removeItem("is_login_in");
    location.reload();
  }
}
