import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';
import{UserService} from '../user.service';
@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  cartItems : any = [] ;
  billamt = false;
  sum = 0;
  count;
  quantity : any = [];

  constructor(private user : UserService) { }

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem("selectedItems"));
    console.log("selected:",this.cartItems);
    this.quantity = this.cartItems["quantity"];
    
  }

  removeItem(cnt){
    var arr = this.cartItems ;
    this.cartItems = this.cartItems.filter(function(value, index, arr ){ 
      return index != cnt;
  });
    
    console.log("final:", this.cartItems);

  }

  doBill(){
    console.log("final:", this.cartItems);

    var record = '';
    var itemName = '';
    var quantity = '';

    for(let i=0;i<this.cartItems.length; i++){
      this.sum = this.sum + this.cartItems[i]["quantity"]*this.cartItems[i]["price"];
      if(i== this.cartItems.length -1){
        record = record + this.cartItems[i]["record"];
      itemName = itemName  +this.cartItems[i]["name"] ;
      quantity = quantity  +this.cartItems[i]["quantity"];
      }else{
        record = record + this.cartItems[i]["record"]+",";
        itemName = itemName  +this.cartItems[i]["name"] +",";
        quantity = quantity  +this.cartItems[i]["quantity"]+",";
      }
      
     

    }

    this.billamt = true;
    console.log("sum:", this.sum);

    this.user
      .saveOrders(record,itemName,quantity)
      .subscribe((res: any) => {
      });

    
  }


  incrementCount(cnt,quantity){
    this.count =  quantity;
    console.log(quantity);
    quantity = quantity + 1;
    console.log(cnt);
    this.cartItems[cnt]["quantity"] = quantity;
    console.log(this.cartItems);
  }

  decrementCount(cnt,quantity){
    
    console.log("quntity:", quantity);
    this.count =  quantity;
    console.log(quantity);
    if(quantity>=1){
      quantity = quantity - 1;
    }
   
    console.log(cnt);
    this.cartItems[cnt]["quantity"] = quantity;
    console.log(this.cartItems);

    // this.count =  quantity;
    // console.log(quantity);
    // if(quantity>0){
    //   quantity = quantity - 1;
    // }
    // else if((quantity == 0)){
    //   quantity = 0;
    // }
    
    // console.log(cnt);
    // this.cartItems[cnt]["quantity"] = quantity;
    // console.log(this.cartItems);
    
  }
}
