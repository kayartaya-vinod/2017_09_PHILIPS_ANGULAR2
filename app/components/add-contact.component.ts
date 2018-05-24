import { OnInit, Component } from "@angular/core";
import { ContactService } from "../services/contact-service";
import { Router } from "@angular/router";
import { Contact } from "../model/contact";

@Component({
    templateUrl: "./templates/contact-form.html"
})
export class AddContactComponent implements OnInit {

    private contact: Contact = new Contact();

    constructor(private cs:ContactService, private router:Router){
    }

    ngOnInit(): void {
    }

    save(): void {
        this.cs.addContact(this.contact)
        .then(data=>{
            this.router.navigate(["/view-contact", data.id]);
        })
        .catch(err=>console.log(err));
    }

}
