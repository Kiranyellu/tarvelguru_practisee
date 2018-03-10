import { Component } from "@angular/core"
import { DataService } from "../services/service.component";
import { HotelDataService } from "../services/hotelData.services";
import {ActivatedRoute,Router} from '@angular/router';

@Component({
    selector: 'header-root',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    router: any;

    TitleAndImage: any;
    RightTabs: any;
    CenterTabs: any;
    LogoutTab:any;
    userDetails:any;

    constructor(private datasvc:DataService,private hostelsvs:HotelDataService) {

        this.userDetails={
            isAuthenticated:false,
           firstName:"",
           lastName:""
        }

        this.TitleAndImage = {
            title: "Travel Guru",
            image: "https://www.travelguru.com/travelguru/resources/beetle/images/tg/travelguru-homestay-logo-199x52.png"
        };
        this.CenterTabs = this.datasvc.getCenterMenu();
        this.RightTabs =this.datasvc.getRightMenu();
        this.hostelsvs.handleLoginAndLogout()
        .subscribe(x=>{
            console.log(x);
            this.userDetails =x;
            console.log(this.userDetails);
            if(x.isAuthenticated){
                this.CenterTabs = this.datasvc.getCenterMenu();
                this.RightTabs=[];
                this.router.navigateByUrl('/home');
            }
            else{
                this.CenterTabs=[];
                this.RightTabs = this.datasvc.getRightMenu();
                this.router.navigateByUrl('/login');
            }
        })
    }

}