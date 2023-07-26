import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {ClientsModel} from "../models/clients.model";
@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  //private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getClients (): Observable<ClientsModel[]> {
    return this.http.get<ClientsModel[]>(`http://localhost:8081/client`).pipe(
      catchError(this.handleError)
    );
  }

  getClientById (id: number): Observable<ClientsModel> {
    return this.http.get<ClientsModel>(`http://localhost:8081/client/`.concat(String(id))).pipe(
      catchError(this.handleError)
    );
  }

  addClient(client: ClientsModel): Observable<ClientsModel> {
    return this.http.post<ClientsModel>('http://localhost:8081/client/', client).pipe(
      catchError(this.handleError)
    );
  }

  updateClient(id:number, client: ClientsModel): Observable<ClientsModel> {
    return this.http.put(`http://localhost:8081/client/`.concat(String(id)), client).pipe(
      catchError(this.handleError)
    );
  }

  deleteClient(id:any): Observable<any> {
    return this.http.delete(`http://localhost:8081/client/`.concat(id)).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<any> {
    console.error('Ocorreu um erro:', error);
    return throwError('Algo deu errado; por favor, tente novamente mais tarde.');
  }

}
