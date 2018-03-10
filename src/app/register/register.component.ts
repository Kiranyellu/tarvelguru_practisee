import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HotelDataService } from '../services/hoteldata.servcie';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerUser: any;
  countries: Array<any>;
  showError:boolean;
  regexAlphabets:any;
  regexNumbers:any;

  constructor(private datasvc: DataService, private hotelSvc: HotelDataService) {
    this.registerUser = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      email: "",
      gender: "",
      country: "",
      agree: false
    };

    this.regexAlphabets=/^[a-zA-Z ]*$/;
    this.regexNumbers=/^\d+$/;
    
    // this.countries= [{name:"India",code:"IN"},
    // {name:"Australia",code:"AUS"},
    // {name:"United States",code:"USA"}];
    this.hotelSvc.getCountryList()
      .subscribe(x => {
        this.countries = x.json().Countries;
      },
      err => {
        this.showError=true;
      })
  }
  register() {
    console.log(this.registerUser);
    this.hotelSvc.registerUserWithApi(this.registerUser)
      .subscribe((x) => {
        console.log(x)
      },
      (err) => {
        console.log(err);
      })
  }
}
