import { Component, OnInit } from '@angular/core';
import { Notifications } from 'src/app/model/notifications';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers:[Notifications],
})
export class NotificationsComponent implements OnInit {

  // imag:any="assets/background/background-1.jpg";
  
  
  newupload:any;
  notificationForm:any={

    badge: '',title: '',activeStatus: '',name: '',content: '',image: ''
  };
  
  constructor(private notifications : Notifications) { }

  notificationsData:any;

  ngOnInit(): void {

    this.getDetails();
  }

  getDetails(){
    
    this.notifications.getNotificationsList().subscribe((data)=>{
      this.notificationsData = data;
    })
  }

  addDetails(){

    this.notifications.addDetails(this.notificationForm).subscribe((data)=>{
      console.log(data);
      this.getDetails();
      
    })
  }

  

  // onselect(event:any){
  //   if(event.target.files[0]){
  //     let reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);
  //     reader.onload = (event:any) => {
  //       this.formImage = event.target.result;
  //     }
  //   }
  // }

}
