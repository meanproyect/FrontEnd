import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';

import { HttpClientModule } from '@angular/common/http';
import { TicketsComponent } from './components/tickets/tickets.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientService } from './services/client.service';
import { UsuariosNoFakeComponent } from './components/usuarios-no-fake/usuarios-no-fake.component';
import { UpdateClienteContrasenaComponent } from './components/update-cliente-contrasena/update-cliente-contrasena.component';
import { OtroComponent } from './components/otro/otro.component';
import { ListarTicketsComponent } from './components/listar-tickets/listar-tickets.component';
import { UpdateUserContrasenaComponent } from './components/update-user-contrasena/update-user-contrasena.component';
import { SoporteComponent } from './components/soporte/soporte.component';
import { ListarSoporteComponent } from './components/listar-soporte/listar-soporte.component';
import { ListarTicketsSoporteComponent } from './components/listar-tickets-soporte/listar-tickets-soporte.component';
import { ListarTicketsClienteComponent } from './components/listar-tickets-cliente/listar-tickets-cliente.component';
import { ListarTicketsTerminadosComponent } from './components/listar-tickets-terminados/listar-tickets-terminados.component';
import { UpdateSoporteDatosComponent } from './components/update-soporte-datos/update-soporte-datos.component';
import { TicketDetalleComponent } from './components/ticket-detalle/ticket-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProfileComponent,
    UsuariosComponent,
    HomeComponent,
    RegisterAdminComponent,
    TicketsComponent,
    UsuariosNoFakeComponent,
    UpdateClienteContrasenaComponent,
    OtroComponent,
    ListarTicketsComponent,
    UpdateUserContrasenaComponent,
    SoporteComponent,
    ListarSoporteComponent,
    ListarTicketsSoporteComponent,
    ListarTicketsClienteComponent,
    ListarTicketsTerminadosComponent,
    UpdateSoporteDatosComponent,
    TicketDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // DocumentViewModule
    
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
