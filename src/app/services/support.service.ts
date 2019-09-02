import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry} from 'rxjs/operators';
import { MapOperator } from 'rxjs/internal/operators/map';
@Injectable({
  providedIn: 'root'
})
export class SupportService {
  endpoint = 'http://localhost:3789/SupportTI';

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

  getSupport():Observable<any>{
    return this.http.get(this.endpoint + '/list-Support', this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  setSupport(save_support):Observable<any>{
    let params = JSON.stringify(save_support);
    return this.http.post(this.endpoint + '/save-Support', params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  updateSupport(id, update_support):Observable<any>{
    let params =JSON.stringify(update_support);
    return this.http.put(this.endpoint + '/update-Support/'+ id, params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  updateSupportDatos(id,update_support):Observable<any>{
    let params = JSON .stringify(update_support);
    return this.http.put(this.endpoint + '/update-Support-Datos/'+id, params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  deleteSupport(id):Observable<any>{
    return this.http.put(this.endpoint + '/delete-Support/'+id,this.httpOptions).pipe(
      map(this.extractData)
    )
  }
  buscarSupport(id):Observable<any>{
    return this.http.get(this.endpoint + '/buscar-Support/'+id, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
}
