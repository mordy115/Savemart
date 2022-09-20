import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  prodects_new_arrivals:Product[]=[];
  prodects_flash_deals:Product[]=[];
  test_data:Product[]=[]
  all_products:Product[]=[]

  constructor() {
    this.get_new_arrivals_product();
    this.get_flash_deals_product();
    this.get_test_data();
    this.all_products = [...this.prodects_flash_deals,...this.prodects_new_arrivals,...this.test_data]
  }
  get_new_arrivals_product(){
    this.prodects_new_arrivals = [
      new Product(1,"iphone 13",200 ,"iphone 13 pro max","https://demo.bestprestashoptheme.com/savemart/29-home_default/brown-bear-printed-sweater.jpg","https://demo.bestprestashoptheme.com/savemart/30-home_default/brown-bear-printed-sweater.jpg","Gaming Gear",),
      new Product(2,"iphone 12",100 ,"iphone 12 pro max","https://demo.bestprestashoptheme.com/savemart/59-home_default/curabitur-in-lorem-sit-ameten-alt.jpg","https://demo.bestprestashoptheme.com/savemart/60-home_default/curabitur-in-lorem-sit-ameten-alt.jpg","Gaming Gear"),
      new Product(3,"iphone 11",60 ,"iphone 11 pro max","https://demo.bestprestashoptheme.com/savemart/49-home_default/nullam-tempor-orci-eu-pretium.jpg","https://demo.bestprestashoptheme.com/savemart/50-home_default/nullam-tempor-orci-eu-pretium.jpg","Gaming Gear"),
      new Product(4,"iphone 10",700 ,"iphone 10 pro max","https://demo.bestprestashoptheme.com/savemart/34-home_default/the-best-is-yet-to-come-framed-poster.jpg","https://demo.bestprestashoptheme.com/savemart/35-home_default/the-best-is-yet-to-come-framed-poster.jpg","Gaming Gear"),
      new Product(5,"iphone 9",40 ,"iphone 9 pro max","https://demo.bestprestashoptheme.com/savemart/54-home_default/donec-non-lectus-ac-erat-sedei.jpg","https://demo.bestprestashoptheme.com/savemart/55-home_default/donec-non-lectus-ac-erat-sedei.jpg","Gaming Gear"),
      new Product(6,"iphone 8",70 ,"iphone 8 pro max","https://demo.bestprestashoptheme.com/savemart/84-home_default/proin-placerat-lacus-eget-auctor.jpg","https://demo.bestprestashoptheme.com/savemart/85-home_default/proin-placerat-lacus-eget-auctor.jpg","Gaming Gear"),

      new Product(7," iphone",150 ,"iphone 13 pro max","https://demo.bestprestashoptheme.com/savemart/104-home_default/nam-feugiat-tellus-nec-ultrices.jpg","https://demo.bestprestashoptheme.com/savemart/105-home_default/nam-feugiat-tellus-nec-ultrices.jpg","Smart Watches"),
      new Product(8,"iphone 12",350 ,"iphone 12 pro max","https://demo.bestprestashoptheme.com/savemart/109-home_default/mauris-semper-mattis-gravida.jpg","https://demo.bestprestashoptheme.com/savemart/110-home_default/mauris-semper-mattis-gravida.jpg","Smart Watches"),
      new Product(9,"iphone 11",400 ,"iphone 11 pro max","https://demo.bestprestashoptheme.com/savemart/24-home_default/hummingbird-printed-t-shirt.jpg","https://demo.bestprestashoptheme.com/savemart/25-home_default/hummingbird-printed-t-shirt.jpg" ,"Smart Watches"),
      new Product(10,"iphone 10",45 ,"iphone 10 pro max","https://demo.bestprestashoptheme.com/savemart/43-home_default/the-adventure-begins-framed-poster.jpg","https://demo.bestprestashoptheme.com/savemart/39-home_default/the-adventure-begins-framed-poster.jpg","Smart Watches"),
      new Product(11,"iphone 9",125 ,"iphone 9 pro max","https://demo.bestprestashoptheme.com/savemart/45-home_default/today-is-a-good-day-framed-poster.jpg","https://demo.bestprestashoptheme.com/savemart/44-home_default/today-is-a-good-day-framed-poster.jpg","Smart Watches"),
      new Product(12,"hp",222.99 ,"iphone 8 pro max","https://demo.bestprestashoptheme.com/savemart/34-home_default/the-best-is-yet-to-come-framed-poster.jpg","https://demo.bestprestashoptheme.com/savemart/35-home_default/the-best-is-yet-to-come-framed-poster.jpg","Smart Watches"),

    ]
    return this.prodects_new_arrivals
  }
  get_flash_deals_product(){
    this.prodects_flash_deals = [
      new Product(13,"xiaomi",259.00 ,"xiaomi mi 10T pro","https://demo.bestprestashoptheme.com/savemart/39-home_default/the-adventure-begins-framed-poster.jpg","https://demo.bestprestashoptheme.com/savemart/43-home_default/the-adventure-begins-framed-poster.jpg"),
    ]
    return this.prodects_flash_deals
  }
  get_test_data(){
    this.test_data = [
      new Product(14,"iphone 13",200 ,"iphone 13 pro max","https://demo.bestprestashoptheme.com/savemart/29-home_default/brown-bear-printed-sweater.jpg","https://demo.bestprestashoptheme.com/savemart/30-home_default/brown-bear-printed-sweater.jpg","Laptops"),
      new Product(15,"iphone 12",100 ,"iphone 12 pro max","https://demo.bestprestashoptheme.com/savemart/59-home_default/curabitur-in-lorem-sit-ameten-alt.jpg","https://demo.bestprestashoptheme.com/savemart/60-home_default/curabitur-in-lorem-sit-ameten-alt.jpg","Electronics"),
      new Product(16,"iphone 11",60 ,"iphone 11 pro max","https://demo.bestprestashoptheme.com/savemart/49-home_default/nullam-tempor-orci-eu-pretium.jpg","https://demo.bestprestashoptheme.com/savemart/50-home_default/nullam-tempor-orci-eu-pretium.jpg","Laptops"),
      new Product(17,"iphone 10",700 ,"iphone 10 pro max","https://demo.bestprestashoptheme.com/savemart/34-home_default/the-best-is-yet-to-come-framed-poster.jpg","https://demo.bestprestashoptheme.com/savemart/35-home_default/the-best-is-yet-to-come-framed-poster.jpg","Electronics"),
      new Product(18,"iphone 9",40 ,"iphone 9 pro max","https://demo.bestprestashoptheme.com/savemart/54-home_default/donec-non-lectus-ac-erat-sedei.jpg","https://demo.bestprestashoptheme.com/savemart/55-home_default/donec-non-lectus-ac-erat-sedei.jpg","Laptops"),
      new Product(19,"iphone 8",70 ,"iphone 8 pro max","https://demo.bestprestashoptheme.com/savemart/84-home_default/proin-placerat-lacus-eget-auctor.jpg","https://demo.bestprestashoptheme.com/savemart/85-home_default/proin-placerat-lacus-eget-auctor.jpg","Electronics"),

      new Product(20," iphone",150 ,"iphone 13 pro max","https://demo.bestprestashoptheme.com/savemart/104-home_default/nam-feugiat-tellus-nec-ultrices.jpg","https://demo.bestprestashoptheme.com/savemart/105-home_default/nam-feugiat-tellus-nec-ultrices.jpg","Laptops"),
      new Product(21,"iphone 12",350 ,"iphone 12 pro max","https://demo.bestprestashoptheme.com/savemart/109-home_default/mauris-semper-mattis-gravida.jpg","https://demo.bestprestashoptheme.com/savemart/110-home_default/mauris-semper-mattis-gravida.jpg","Electronics"),
      new Product(22,"iphone 11",400 ,"iphone 11 pro max","https://demo.bestprestashoptheme.com/savemart/24-home_default/hummingbird-printed-t-shirt.jpg","https://demo.bestprestashoptheme.com/savemart/25-home_default/hummingbird-printed-t-shirt.jpg","Laptops"),
      new Product(23,"iphone 10",45 ,"iphone 10 pro max","https://demo.bestprestashoptheme.com/savemart/43-home_default/the-adventure-begins-framed-poster.jpg","https://demo.bestprestashoptheme.com/savemart/39-home_default/the-adventure-begins-framed-poster.jpg","Electronics"),
      new Product(24,"iphone 9",125 ,"iphone 9 pro max","https://demo.bestprestashoptheme.com/savemart/45-home_default/today-is-a-good-day-framed-poster.jpg","https://demo.bestprestashoptheme.com/savemart/44-home_default/today-is-a-good-day-framed-poster.jpg","Electronics"),
      new Product(25,"hp",222.99 ,"iphone 8 pro max","https://demo.bestprestashoptheme.com/savemart/34-home_default/the-best-is-yet-to-come-framed-poster.jpg","https://demo.bestprestashoptheme.com/savemart/35-home_default/the-best-is-yet-to-come-framed-poster.jpg" ,"Laptops"),

    ]
    return this.test_data
  }
  getproductById(id:number){
    let result = this.all_products.filter(el=>el.id===id);
    return result
  }

}
