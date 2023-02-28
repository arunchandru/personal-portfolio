import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})
export class Orders {

    constructor(private http:HttpClient){}

    url="https://localhost:7221/api/OrderDetails";
    
    users(){
        return this.http.get(this.url);
    }

    ordersPaidDetails:any=[
      
        {id:"#15346",product:"The National Council of Teachers of English ",customer:"John sanders",date:"17oct",time:"12:16 PM",status:"paid",total:"$259.35",action:"view"},
        {id:"#15345",product:"English and the language arts at all levels",customer:"Dylan Ambrose	",date:"16oct",time:"03:16 PM",status:"paid",total:"$96.20",action:"view"}

    ]

    ordersPendingDetails:any=[
       
        {id:"#15341",product:"professional growth throughout their careers",customer:"Adam smith",date:"12oct",time:"10:16 PM",status:"pending",total:"$2.35",action:"view"},
        {id:"#15348",product:"This item is part of a JSTOR Collection.",customer:"Doughlas	",date:"08oct",time:"05:16 PM",status:"pending",total:"$91.20",action:"view"}
    ]

    ordersUnpaidDetails:any=[

        {id:"#15343",product:"academic community use digital technologies",customer:"Nicholas cage",date:"11oct",time:"07:16 PM",status:"unpaid",total:"$20.35",action:"view"},


    ]

}