import { Component, OnInit } from "@angular/core";
import { Contact } from "../model/contact";
import { ContactService } from "../services/contact-service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "view-contact",
    templateUrl: "./templates/view-contact.html"
})
export class ViewContactComponent implements OnInit {
    
    // model data, accessible in the HTML template using handle bars
    private contact: Contact = new Contact();

    constructor(private cs: ContactService, 
        private activatedRoute: ActivatedRoute,
        private router: Router){
    }

    ngOnInit(): void {
        // ActivatedRoute.params is an observable of all the path parameters
        this.activatedRoute.params.subscribe(args=>{
            this.cs.getContactById(args["id"])
            .then(data=>this.contact=data)
            .catch(err=>{
                this.router.navigate(["/contact-list"]);
                alert("Invalid id!");
            });
        });
    }

    deleteHandler(): void {
        if(confirm("Are you sure?")){
            this.cs.deleteContact(this.contact.id)
                .then(()=>{
                    // navigate to home page (contact-list)
                    this.router.navigate(["/contact-list"]);
                }) 
                .catch(); // stay in the same view
        }
    }

}