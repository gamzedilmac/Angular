import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
   
  title = "Ürün Listesi"
  products : Product[] = [
    {id:1,name:"Laptop",price:2500,categoryId:1,description:"Asus",imageUrl:"https://cnet3.cbsistatic.com/img/0Q7vOMtjicHRZ5_BRhjvOG5dVBY=/868x488/2013/10/22/f05aeb01-6797-11e3-846b-14feb5ca9861/Apple_Macbook_Pro_15_35781448-4070.jpg"},
    {id:2,name:"Mouse",price:25,categoryId:2,description:"A4 Tech",imageUrl:"https://cnet3.cbsistatic.com/img/0Q7vOMtjicHRZ5_BRhjvOG5dVBY=/868x488/2013/10/22/f05aeb01-6797-11e3-846b-14feb5ca9861/Apple_Macbook_Pro_15_35781448-4070.jpg"},
    {id:1,name:"Laptop",price:2500,categoryId:1,description:"Asus",imageUrl:"https://cnet3.cbsistatic.com/img/0Q7vOMtjicHRZ5_BRhjvOG5dVBY=/868x488/2013/10/22/f05aeb01-6797-11e3-846b-14feb5ca9861/Apple_Macbook_Pro_15_35781448-4070.jpg"},
    {id:2,name:"Mouse",price:25,categoryId:2,description:"A4 Tech",imageUrl:"https://cnet3.cbsistatic.com/img/0Q7vOMtjicHRZ5_BRhjvOG5dVBY=/868x488/2013/10/22/f05aeb01-6797-11e3-846b-14feb5ca9861/Apple_Macbook_Pro_15_35781448-4070.jpg"},
    {id:1,name:"Laptop",price:2500,categoryId:1,description:"Asus",imageUrl:"https://cnet3.cbsistatic.com/img/0Q7vOMtjicHRZ5_BRhjvOG5dVBY=/868x488/2013/10/22/f05aeb01-6797-11e3-846b-14feb5ca9861/Apple_Macbook_Pro_15_35781448-4070.jpg"},
    {id:2,name:"Mouse",price:25,categoryId:2,description:"A4 Tech",imageUrl:"https://cnet3.cbsistatic.com/img/0Q7vOMtjicHRZ5_BRhjvOG5dVBY=/868x488/2013/10/22/f05aeb01-6797-11e3-846b-14feb5ca9861/Apple_Macbook_Pro_15_35781448-4070.jpg"}

  ]
  ngOnInit() {
  }

}
