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


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register/:id', component: RegisterComponent},
  {path: 'registerAdmin', component: RegisterAdminComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'tickets', component: TicketsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'usuariosNoFake', component: UsuariosNoFakeComponent},
  {path: 'updateclientecontrasena/:id', component: UpdateClienteContrasenaComponent},
  {path: 'updateusercontrasena', component: UpdateUserContrasenaComponent},
  {path: 'listarTickets', component: ListarTicketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
