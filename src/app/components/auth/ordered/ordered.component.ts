import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { OrderService } from 'src/app/service/order/order.service';

@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styleUrls: ['./ordered.component.css']
})
export class OrderedComponent implements OnInit {
  id_User:number=0;
  order:Cart[]=[]

  constructor(
    private order_serbice:OrderService,
  ) {

   }

  ngOnInit(): void {
    this.id_User = Number(localStorage.getItem('id_User'))?Number(localStorage.getItem('id_User')):0;
    this.order_serbice.getOrderByIdUser(this.id_User).subscribe(
      (response)=>{
        this.order = response
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  delete(idUser:number,idOrder:number ){
    this.order_serbice.deletOrder(idUser,idOrder).subscribe(
      re=>{
        location.reload()
      }
    )

  }

}
