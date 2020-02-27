import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	items;
	checkoutForm;
  tprice;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
         this.checkoutForm = this.formBuilder.group({
     name: '',
     address: '',
     emaila: ''
   });
 }

  ngOnInit() {
                   
         this.items = this.cartService.getItems();

         // *ngFor="let tprice of items"
         
       let tprice = 0;
         for (let i=0;i<this.items.length;i++){
         tprice += this.items[i].price;
         console.log("tprice:"+tprice)
         this.tprice =tprice;
         // console.log("items1:"+this.items[0].price)
       }
 }
 onSubmit(customerData) {
   // Process checkout data here
   // window.alert('Your order has been submitted successfully!' + customerData);
     console.warn('Your order has been submitted', customerData);

   this.items = this.cartService.clearCart();
   this.checkoutForm.reset();
 }
}
