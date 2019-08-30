import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  endpoint = 'http://localhost:3789/PlusTI';
  httOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  private extractData(res: Response){
    let body = res;
    return body || [ ] || { };
  }
  login(login_login):Observable<any>{
    let params = JSON.stringify(login_login);
    return this.http.post(this.endpoint + '/Login', params,this.httOptions).pipe(
      map(this.extractData)
    )
  }
}
