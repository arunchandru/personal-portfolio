import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/model/orders'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [Orders],
})
export class OrdersComponent implements OnInit {

  ordersAllData:any;
  ordersPaidData:any;
  ordersPendingData:any;
  ordersUnpaidData:any;

  constructor( private order : Orders) {

    this.order.users().subscribe((data)=>{
      this.ordersAllData = data;
      console.log(this.ordersAllData)
    })
   }
    
  ngOnInit(): void {
    this.ordersPaidData=this.order.ordersPaidDetails;
    this.ordersPendingData=this.order.ordersPendingDetails;
    this.ordersUnpaidData=this.order.ordersUnpaidDetails;

    // this.ordersAllData.push(this.ordersPaidData[0],this.ordersPaidData[1],this.ordersPendingData[0],this.ordersPendingData[1],this.ordersUnpaidData[0]);
    
    // for (let i=0;i<this.ordersPaidData.length;i++){
    //   this.ordersAllData.push(this.ordersPaidData[i]);
    // }
    // for (let i=0;i<this.ordersPendingData.length;i++){
    //   this.ordersAllData.push(this.ordersPendingData[i]);
    // }
    // for (let i=0;i<this.ordersUnpaidData.length;i++){
    //   this.ordersAllData.push(this.ordersUnpaidData[i]);
    // }


  }

}
