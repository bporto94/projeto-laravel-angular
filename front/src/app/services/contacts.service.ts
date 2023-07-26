import {HttpClient} from "@angular/common/http";
import {ContactsModel} from "../models/contacts.model";
import {catchError, Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getContacts (): Observable<ContactsModel[]> {
    return this.http.get<ContactsModel[]>(`http://localhost:8081/contact`).pipe(
      catchError(this.handleError)
    );
  }

  getContactById (id: number): Observable<ContactsModel> {
    return this.http.get<ContactsModel>(`http://localhost:8081/contact/`.concat(String(id))).pipe(
      catchError(this.handleError)
    );
  }

  addContact(contact: ContactsModel): Observable<ContactsModel> {
    return this.http.post<ContactsModel>('http://localhost:8081/contact/', contact).pipe(
      catchError(this.handleError)
    );
  }

  updateContact(id:number, contact: ContactsModel): Observable<ContactsModel> {
    return this.http.put(`http://localhost:8081/contact/`.concat(String(id)), contact).pipe(
      catchError(this.handleError)
    );
  }

  removeContact(id:any): Observable<any> {
    return this.http.delete(`http://localhost:8081/contact/`.concat(id)).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<any> {
    console.error('Ocorreu um erro:', error);
    return throwError('Algo deu errado; por favor, tente novamente mais tarde.');
  }
}
