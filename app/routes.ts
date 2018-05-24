import { ContactListComponent } from "./components/contact-list.component";
import { ViewContactComponent } from "./components/view-contact.component";
import { EditContactComponent } from "./components/edit-contact.component";
import { AddContactComponent } from "./components/add-contact.component";

export const routes = [
    {
        path: "",
        redirectTo: "contact-list",
        pathMatch: "full",  
        // component: ContactListComponent
    },
    {
        path: "contact-list",
        component: ContactListComponent
    },
    {
        path: "view-contact/:id",
        component: ViewContactComponent
    },
    {
        path: "edit-contact/:id",
        component: EditContactComponent
    },
    {
        path: "add-contact",
        component: AddContactComponent
    }
];