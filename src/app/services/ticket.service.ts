import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { MapOperator } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  endpoint = 'http://localhost:3789/TicketPlusTI';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  private extracData(res: Response){
    let body = res;
    return body || [ ] || { }
  };

  //llamamos los servicios del backEnd 
  getTicket():Observable<any>{
    return this.http.get(this.endpoint + '/List-Tickets',this.httpOptions).pipe(
      map(this.extracData)
    )
  }
  getTicketsFinished():Observable<any>{
    return this.http.get(this.endpoint + '/Listar-Tickets-Terminados', this.httpOptions).pipe(
      map(this.extracData)
    )
  }
  
  setTicket(save_ticket):Observable<any>{
    let params = JSON.stringify(save_ticket);
    console.log(params);
    return this.http.post(this.endpoint + '/Save-Ticket', params, this.httpOptions).pipe(
      map(this.extracData)
    )
  }
  updateTicket(id, update_ticket):Observable<any>{
    let params = JSON.stringify(update_ticket);
    console.log(params);
    return this.http.put(this.endpoint + '/Update-Ticket/' + id, params, this.httpOptions).pipe(
      map(this.extracData)
    )
  }
  deleteTicket(id): Observable<any>{
    return this.http.put(this.endpoint + '/Delete-ticket/'+ id, this.httpOptions).pipe(
      map(this.extracData)
    )
  }
  buscarTicket(id): Observable<any>{
    return this.http.get(this.endpoint + '/Buscar-Ticket/'+ id, this.httpOptions).pipe(
      map(this.extracData)
    )
  }
  TicketAsignado(client):Observable<any>{
    let params = JSON.stringify(client);
    return this.http.post(this.endpoint + '/Assigned-Ticket', params, this.httpOptions).pipe(
      map(this.extracData)
    )
  }
  getImage(id):Observable<any>{
    return this.http.post(this.endpoint + '/getPhoto/' + id, this.httpOptions).pipe(
      map(this.extracData)
    )
  }

  //Actualizaciones de estado de ticket

  TicketUpdateConform(id,Update):Observable<any>{
    let params = JSON.stringify(Update)
    return this.http.put(this.endpoint + '/Update-Confim/' + id, params,this.httpOptions).pipe(
      map(this.extracData)
    )
  }
  TicketUpdateProcess(id,Update):Observable<any>{
    let params = JSON.stringify(Update)
    return this.http.put(this.endpoint + '/Update-Process/' +   id, params,this.httpOptions).pipe(
      map(this.extracData)
    )
  }
  TicketUpdateEnd(id,Update): Observable<any>{
    let params = JSON.stringify(Update)
    return this.http.put(this.endpoint + '/Update-finish/'+id, params , this.httpOptions).pipe(
      map(this.extracData)
    )
  }
  TicketUpdateWait(id,Update): Observable<any>{
    let params = JSON.stringify(Update)
    return this.http.put(this.endpoint + '/Update-Wait/'+id, params , this.httpOptions).pipe(
      map(this.extracData)
    )
  }
  TicketUpdateConfirmofClient(id,Update): Observable<any>{
    let params = JSON.stringify(Update)
    return this.http.put(this.endpoint + '/Update-ConfirmClient/'+id, params , this.httpOptions).pipe(
      map(this.extracData)
    )
  }
   
}
