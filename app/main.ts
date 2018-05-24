import "bootstrap-loader"; // bootstrap css framework
import "rxjs"; // provides support Observable pattern

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AddressBookComponent } from "./components/address-book.component";
import { ViewContactComponent } from "./components/view-contact.component";
import { TitlePipe } from "./pipes/title.pipe";
import { ContactService } from "./services/contact-service";
import { Contact } from "./model/contact";
import { ContactListComponent } from "./components/contact-list.component";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { EditContactComponent } from "./components/edit-contact.component";
import { AddContactComponent } from "./components/add-contact.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { AgePipe } from "./pipes/age.pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    declarations: [
        AddressBookComponent,
        ViewContactComponent,
        TitlePipe,
        ContactListComponent,
        EditContactComponent,
        AddContactComponent,
        FilterPipe,
        AgePipe
    ],
    providers: [
        ContactService
    ],
    bootstrap: [AddressBookComponent]
})
class MainModule {
}

platformBrowserDynamic().bootstrapModule(MainModule);