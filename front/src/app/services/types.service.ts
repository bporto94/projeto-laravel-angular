import {HttpClient} from "@angular/common/http";
import {TypesModel} from "../types/types.model";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(private http: HttpClient) { }

  listTypes (): Observable<any> {
    return this.http.get<any[]>(`http://localhost:8081/types`);
  }
  listType (id: any): Observable<any> {
    return this.http.get<any[]>(`http://localhost:8081/types/`.concat(id));
  }

  addType(data: TypesModel): Observable<any> {
    return this.http.post(`http://localhost:8081/types`, data);
  }

  updateType(id:any, data: TypesModel): Observable<any> {
    return this.http.put(`http://localhost:8081/types/`.concat(id), data);
  }

  removeType(id:any): Observable<any> {
    return this.http.delete(`http://localhost:8081/types/`.concat(id));
  }

}
