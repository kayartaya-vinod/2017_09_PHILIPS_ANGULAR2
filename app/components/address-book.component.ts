import { Component, OnInit, OnDestroy} from "@angular/core";

@Component({
    selector: "addressbook",
    templateUrl: "./templates/address-book.html"
})
export class AddressBookComponent implements OnInit, OnDestroy{
    
    constructor(){
        console.log("AddressBookComponent instantiated");
    }
    ngOnInit(): void {
        console.log("AddressBookComponent initialized");
    }
    ngOnDestroy(): void {
        console.log("AddressBookComponent destroyed");
    }

}