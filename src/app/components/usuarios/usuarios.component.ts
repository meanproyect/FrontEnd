import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { ClientModels } from 'src/app/models/client-models';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  client: ClientModels;
  clientes: ClientModels[];

  constructor(public rest: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  
  getClients() {
    this.rest.getClients().subscribe(res => {
      console.log(res);
      this.clientes = res.client
    })
  }

}
