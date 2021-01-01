import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../user.service";
import { CartItemsComponent } from '../cart-items/cart-items.component';
import { AlertModule, AlertService } from "ngx-alerts";

@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.css']
})
export class ShoppingItemsComponent implements OnInit {
  alertMessage : any;
  tempFlag = false;
  count = [];
  selectedItems : any= [];
 allItems : any = [];
  constructor(private router: Router,
    private user: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.count.push(0);
    this.count.push(0);
    this.count.push(0);
    this.count.push(0);


    this.user
      .getAllItems()
      .subscribe((res: any) => {
        this.allItems = res;
        console.log(this.allItems);
      });
  }
   incrementCount(cnt){
    console.log(this.count);
    this.count[cnt] = this.count[cnt] + 1;
    //document.getElementById["QuatityNumber"] = this.count;
    console.log("quantity incr",this.count[cnt]);
    if(this.count[cnt] >0){
    let selectedObj = this.allItems[cnt];
    selectedObj.quantity = this.count[cnt];
    console.log(selectedObj);
    this.selectedItems[cnt] = selectedObj ;
    console.log(this.selectedItems);
    }
    let selectedObj = this.allItems[cnt];
    selectedObj.quantity = this.count[cnt];
    console.log(selectedObj);
    this.selectedItems[cnt] = selectedObj ;
    console.log(this.selectedItems);
  }

  decrementCount(cnt){
    
    if(this.count[cnt]>0){
      console.log("decr count:", this.count[cnt]);
      this.count[cnt] = this.count[cnt] - 1;
      if(this.count[cnt]>0){
        let selectedObj = this.allItems[cnt];
      selectedObj.quantity = this.count[cnt];
      console.log("decr obj:",selectedObj);

      this.selectedItems[cnt] = selectedObj ;
      console.log(this.selectedItems);
      }else{
        this.count[cnt] = 0;
        console.log(cnt);
        var arr = this.selectedItems;
        var name  = arr[cnt]["name"];
        console.log("arr:", arr[cnt]["name"]);
        

        this.selectedItems = this.selectedItems.filter(function(value, index, arr ){ 
          return index != cnt;
      });
      console.log("obj:",this.selectedItems);
      }
      
    }
    else if((this.count[cnt] == 0)){
      this.count[cnt] = 0;
    }
    //this.count[cnt] = this.count[cnt] - 1;
    
    
    //document.getElementById["QuatityNumber"] = this.count;
    
  }

  checkOut(){
    console.log("items:",this.selectedItems);
    var arr = this.selectedItems;
    this.selectedItems = this.selectedItems.filter(function(value, index, arr ){ 
      return value != null;
  });

    if(this.selectedItems == []){
      this.tempFlag = true;
      this.alertMessage = "Invalid Login Information";
    }
    localStorage.setItem("selectedItems", JSON.stringify(this.selectedItems));
    this.router.navigate(["cartItems"]);
    
  }
}
