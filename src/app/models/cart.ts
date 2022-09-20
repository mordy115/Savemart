export class Cart{
  id:number;
  name:string;
  price:number;
  title:string;
  img1:string;
  img2?:string;
  quantity:number;
  constructor(id:number,name:string,price:number,title:string,img1:string ,img2:string ,quantity:number){
    this.id=id;
    this.name=name;
    this.price=price;
    this.title=title;
    this.img1=img1;
    this.img2=img2;
    this.quantity=quantity
  }
}
