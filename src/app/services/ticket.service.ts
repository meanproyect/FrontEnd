import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  endpoint = 'http://localhost:3789/TicketPlusTI';

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private htpp: HttpClient) { }
  private extracData(res: Response){
    let body = res;
    return body || [ ] || { }
  };

  //llamamos los servicios del backEnd 
  getTicket():Observable<any>{
    return this.htpp.get(this.endpoint + '/List-Tickets',this.httpOptions).pipe(
      map(this.extracData)
    )
  }
  setTicket(save_ticket){
    let params = JSON.stringify(save_ticket);
    return this.htpp.post(this.endpoint + '/Save-Ticket', params, this.httpOptions).pipe(
      map(this.extracData)
    )
  }
  updateTicket(id, update_ticket){
    let params = JSON.stringify(update_ticket);
    return this.htpp.put(this.endpoint + '/Update-Ticket/' + id, params, this.httpOptions).pipe(
      map(this.extracData)
    )
  }
  deleteTicket(id){
    return this.htpp.put(this.endpoint + '/Delete-ticket/'+ id, this.httpOptions).pipe(
      map(this.extracData)
    )
  }
}