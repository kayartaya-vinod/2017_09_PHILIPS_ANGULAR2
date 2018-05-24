import { Injectable } from "@angular/core";
import { Contact } from "../model/contact";
import { Http, Headers } from "@angular/http";

const restUrl: string = "http://localhost:3004/contacts/";
const customHeaders: Headers = new Headers({
    "Content-Type": "application/json"
});

@Injectable()
export class ContactService {

    constructor(private http: Http) { }

    addContact(contact: Contact): Promise<Contact> {
        return this.http.post(restUrl, JSON.stringify(contact), { headers: customHeaders })
            .map(resp => resp.json() as Contact)
            .toPromise();
    }

    getContactById(id: number): Promise<Contact> {
        return this.http.get(restUrl + id)
            .map(resp => resp.json() as Contact).toPromise();;
    }

    deleteContact(id: number): Promise<any> {
        return this.http.delete(restUrl + id).toPromise();;
    }

    getAll(): Promise<Array<Contact>> {
        return this.http.get(restUrl)
            .map(resp => resp.json() as Contact[])
            .toPromise();
    }


    updateContact(contact: Contact): Promise<Contact> {
        return this.http.put(restUrl + contact.id, contact, { headers: customHeaders })
            .map(resp => resp.json() as Contact)
            .toPromise();
    }
}