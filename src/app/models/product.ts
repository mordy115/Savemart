export class Product{
  id:number;
  name:string;
  price:number;
  title:string;
  img1:string;
  img2?:string;
  categore_name?:string;
  quantity:number=1;
  constructor(id:number,name:string,price:number,title:string,img1:string ,img2?:string ,categore_name?:string){
    this.id=id;
    this.name=name;
    this.price=price;
    this.title=title;
    this.img1=img1;
    this.img2=img2;
    this.categore_name=categore_name
  }
}
