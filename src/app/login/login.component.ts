import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../services/hoteldata.servcie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: any;
  currentDate:Date;
  constructor(private hotelSvc: HotelDataService) {
    this.currentDate= new Date();
    this.loginUser = { userName: "", password: "" }
  }

  ngOnInit() {
  }

  login() {
    this.hotelSvc.login(this.loginUser)
      .subscribe(x => {
        let result = x.json();
        console.log(result);

        //if the user doesnot exist.
        if(result.status==200){
          console.log("Success")
        }
        else if(result.status==400){
            console.log("Internal Server Error. Please try again later");
        }
        else if(result.status==401){
          console.log("User doesnot exist");
        }
        else if(result.status==402){
          console.log("Password mismatch");
        }

      },
      err => {
        console.log(err);
      });
  }

}
