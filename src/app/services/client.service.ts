import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  endpoint = 'http://localhost:3789/ClientPlusTI';
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
    return this.http.get(this.endpoint + '/List-Clients', this.httpOptions).pipe(
      map(this.extractData)
    );
  }
  setClient(save_client): Observable<any>{
    let params = JSON.stringify(save_client);
    console.log(params);
    return this.http.post(this.endpoint + '/Save-Client', params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  updateClient(id,update_client): Observable<any>{
    let params = JSON.stringify(update_client);
    return this.http.put(this.endpoint + '/Update-Client/'+ id, params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
  updateClientDatos(id,updateClient):Observable<any>{
    let params = JSON.stringify(updateClient);
    return this.http.put(this.endpoint + '/Update-Client-Datos/' + id,params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  deleteClient(id): Observable<any>{
    return this.http.put(this.endpoint + '/Delete-Client/' + id, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  BuscarClient(id): Observable<any>{
    return this.http.get(this.endpoint + '/Buscar-Clients/' + id, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
}

