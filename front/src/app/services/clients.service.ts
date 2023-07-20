import {HttpClient} from "@angular/common/http";
import {ClientsModel} from "../clients/clients.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  listClients (): Observable<any> {
    return this.http.get<any[]>(`http://localhost:8081/people`);
  }

  listClient (id: any) {
    return this.http.get<any[]>(`http://localhost:8081/people/`.concat(id));
  }

  addClient(data: ClientsModel): Observable<any> {
    return this.http.post(`http://localhost:8081/people`, data);
  }

  updateClient(id:any, data: ClientsModel): Observable<any> {
    return this.http.put(`http://localhost:8081/people/`.concat(id), data);
  }

  removeClient(id:any): Observable<any> {
    return this.http.delete(`http://localhost:8081/people/`.concat(id));
  }

}
