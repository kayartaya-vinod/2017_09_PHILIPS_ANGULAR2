import { OnInit, Component } from "@angular/core";
import { ContactService } from "../services/contact-service";
import { Contact } from "../model/contact";

@Component({
    selector: "contact-list",
    templateUrl: "./templates/contact-list.html"
})
export class ContactListComponent implements OnInit {

    private contacts: Array<Contact>;
    private token:string;

    constructor(private cs: ContactService) {
    }

    ngOnInit(): void {
        this.cs.getAll()
            .then(data => this.contacts = data)
            .catch(err => console.log(err));
    }

}