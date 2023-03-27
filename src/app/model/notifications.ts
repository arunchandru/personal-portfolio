import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Notifications {

  constructor(private http:HttpClient) { }

  dataUrl="https://localhost:7221/api/Notification";

  getNotificationsList(){
    return this.http.get( this.dataUrl);
  }

  addDetails(notificationForm:any){

    return this.http.post(this.dataUrl,notificationForm);

  }
}
