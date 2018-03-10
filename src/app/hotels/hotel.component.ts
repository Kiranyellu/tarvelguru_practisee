import {Component} from '@angular/core';
import{ HotelDataService} from '../services/hotelData.services';

@Component({
    selector:'hotel-root',
    templateUrl:'./hotel.component.html'
})
export class HotelComponent{
    hotels:Array<any>
     constructor(private  hotelsrv:HotelDataService){
       this.hotelsrv.getRoomsList()
       .subscribe(x=>{
           console.log(x.json());
           this.hotels= x.json().hotels;    
       },
    err=>{
        console.log(err);
    })
     }
}