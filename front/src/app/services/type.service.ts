import {HttpClient} from "@angular/common/http";
import {TypesModel} from "../models/types.model";
import {catchError, Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }

  getType (): Observable<TypesModel[]> {
    return this.http.get<TypesModel[]>(`http://localhost:8081/type`).pipe(
      catchError(this.handleError)
    );
  }

  getTypeById (id: number): Observable<TypesModel> {
    return this.http.get<TypesModel>(`http://localhost:8081/type/`.concat(String(id))).pipe(
      catchError(this.handleError)
    );
  }

  addType(type: TypesModel): Observable<TypesModel> {
    return this.http.post<TypesModel>('http://localhost:8081/type/', type).pipe(
      catchError(this.handleError)
    );
  }

  updateType(id:number, type: TypesModel): Observable<any> {
    return this.http.put(`http://localhost:8081/type/`.concat(String(id)), type).pipe(
      catchError(this.handleError)
    );
  }

  deleteType(id:any): Observable<any> {
    return this.http.delete(`http://localhost:8081/type/`.concat(id)).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<any> {
    console.error('Ocorreu um erro:', error);
    return throwError('Algo deu errado; por favor, tente novamente mais tarde.');
  }

}
