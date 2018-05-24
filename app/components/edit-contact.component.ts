import { OnInit, Component } from "@angular/core";
import { ContactService } from "../services/contact-service";
import { ActivatedRoute, Router } from "@angular/router";
import { Contact } from "../model/contact";

@Component({
    templateUrl: "./templates/contact-form.html"
})
export class EditContactComponent implements OnInit {


    private contact: Contact = new Contact();

    constructor(private cs:ContactService, 
        private activatedRoute: ActivatedRoute, 
        private router: Router){
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(args=>{
            this.cs.getContactById(args["id"])
            .then(data=>this.contact=data)
            .catch(()=>{
                this.router.navigate(["/contact-list"]);
                alert("Invalid id");
            });
        });
    }

    save(): void {
        this.cs.updateContact(this.contact)
        .then(data=>{
            this.router.navigate(["/view-contact", data.id]);
        })
        .catch(err=>console.log(err));
    }

}