import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  endopoint = 'http://localhost:3789/AdministratorPlusTI';
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }
  getClients(): Observable<any>{
    return this.http.get(this.endopoint + '/List-Clients', this.httpOptions).pipe(
      map(this.extractData)
    );
  }
  setClient(save_client): Observable<any>{
    let params = JSON.stringify(save_client);
    return this.http.post(this.endopoint + '/Save-Client', params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  updateClient(id,update_client): Observable<any>{
    let params = JSON.stringify(update_client);
    return this.http.put(this.endopoint + '/Update-Client/'+ id, params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
  deleteClient(id): Observable<any>{
    return this.http.put(this.endopoint + '/Delete-Client/' + id, this.httpOptions).pipe(
      map(this.extractData)
    )
  }

}

