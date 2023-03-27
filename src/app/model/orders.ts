import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})
export class Orders {

    constructor(private http:HttpClient){}

    AllDataUrl="https://localhost:7221/api/OrderDetails/";
   

    getOrdersList(status:any){
        return this.http.get(this.AllDataUrl  + status);
    }

   

}