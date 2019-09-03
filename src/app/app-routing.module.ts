import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsuariosNoFakeComponent } from './components/usuarios-no-fake/usuarios-no-fake.component';
import { UpdateClienteContrasenaComponent } from './components/update-cliente-contrasena/update-cliente-contrasena.component';
import { OtroComponent } from './components/otro/otro.component';
import { ListarTicketsComponent } from './components/listar-tickets/listar-tickets.component';
import { UpdateUserContrasenaComponent } from './components/update-user-contrasena/update-user-contrasena.component';
import { AuthGuard } from './guards/auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SoporteComponent } from './components/soporte/soporte.component';
import { ListarSoporteComponent } from './components/listar-soporte/listar-soporte.component';
import { ListarTicketsClienteComponent } from './components/listar-tickets-cliente/listar-tickets-cliente.component';
import { ListarTicketsSoporteComponent } from './components/listar-tickets-soporte/listar-tickets-soporte.component';
import { ListarTicketsTerminadosComponent } from './components/listar-tickets-terminados/listar-tickets-terminados.component';
import { UpdateSoporteDatosComponent } from './components/update-soporte-datos/update-soporte-datos.component';
import { ClientGuard } from './guards/client.guard';
import { AdminGuard } from './guards/admin.guard';
import { SupportGuard } from './guards/support.guard';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'register/:id', component: RegisterComponent,canActivate:[AdminGuard]},
  {path: 'registerAdmin/:id', component: RegisterAdminComponent ,canActivate:[AdminGuard]},

  {path: 'usuarios', component: UsuariosComponent,canActivate:[AdminGuard]},

  {path: 'tickets/:id', component: TicketsComponent,canActivate:[ClientGuard]},

  {path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]},

  {path: 'usuariosNoFake', component: UsuariosNoFakeComponent,canActivate:[AdminGuard]},

  {path: 'updateclientecontrasena/:id', component: UpdateClienteContrasenaComponent,canActivate:[AdminGuard]},
  {path: 'updateusercontrasena/:id', component: UpdateUserContrasenaComponent,canActivate:[AdminGuard]},
  {path: 'updateSoporteDatos/:id', component: UpdateSoporteDatosComponent,canActivate:[AdminGuard]},
  {path: 'listarTickets', component: ListarTicketsComponent,canActivate:[AdminGuard]},
  {path: 'otro', component: OtroComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'soporte/:id', component: SoporteComponent,canActivate:[AdminGuard]},
  {path: 'listarSoporte', component: ListarSoporteComponent,canActivate:[AdminGuard]},
  {path: 'listarTicketsCliente', component: ListarTicketsClienteComponent, canActivate:[ClientGuard]},
  {path: 'listarTicketsSoporte', component: ListarTicketsSoporteComponent, canActivate:[SupportGuard]},
  {path: 'listarTicketsTerminados', component: ListarTicketsTerminadosComponent, canActivate:[AdminGuard]},
  {path: '**', redirectTo:'otro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
