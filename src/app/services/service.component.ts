import { Injectable } from '@angular/core'
import { Http } from '@angular/http';

@Injectable()

export class DataService {

    constructor(private http:Http) {

    }
    getCountriesList() {
        return this.http.get("assets/countriesData.json");
    }
    getCenterMenu() {
        return [
            { display: "Home", path: "home", visible: true },
            { display: "Payment", path: "payment", visible: true },
            { display: "Room", path: "room", visible: true },
            { display: "Hotel", path: "hotels", visible: true }
        ]
    }
    getRightMenu() {
        return [
            { display: "Login", path: "login", visible: true },
            { display: "Register", path: "register", visible: true }
        ]
    }

}
