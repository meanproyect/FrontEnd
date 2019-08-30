import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  endpoint = 'http://localhost:3789/AdministratorPlusTI';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }
  private extractData(res: Response){
    let body =res;
    return body || [ ] || { };
  }

  getAdministrator(): Observable<any>{
    return this.http.get(this.endpoint + '/list-user', this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  setAdministrator(save_User): Observable<any>{
    let params = JSON.stringify(save_User);
    return this.http.post(this.endpoint + '/save-user', params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  updateAdministrator(id,update_User):Observable<any>{
    let params = JSON.stringify(update_User);
    return this.http.put(this.endpoint + '/update-user/'+id, params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  updateAdministratorDatos(id,update_user): Observable<any>{
    let params = JSON.stringify(update_user);
    return this.http.put(this.endpoint + '/Update-User-datos/'+id, params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  deleteAdministrator(id): Observable<any>{
    return this.http.put(this.endpoint + '/delete-user/' + id, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  
  buscarAdministrator(id): Observable<any>{
    return this.http.get(this.endpoint + '/Buscar-user/' + id, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
}
