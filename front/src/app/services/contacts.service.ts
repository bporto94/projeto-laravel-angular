import {HttpClient} from "@angular/common/http";
import {ContactsModel} from "../models/contacts.model";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  listContacts (): Observable<any> {
    return this.http.get<any[]>(`http://localhost:8081/contacts`);
  }

  listContact (id: any): Observable<any> {
    return this.http.get<any[]>(`http://localhost:8081/contacts/`.concat(id));
  }

  addContact(data: ContactsModel): Observable<any> {
    return this.http.post(`http://localhost:8081/contacts`, data);
  }

  updateContact(id:any, data: ContactsModel): Observable<any> {
    return this.http.put(`http://localhost:8081/contacts/`.concat(id), data);
  }

  removeContact(id:any): Observable<any> {
    return this.http.delete(`http://localhost:8081/contacts/`.concat(id));
  }

}
