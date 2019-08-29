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
    UpdateClienteContrasenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
