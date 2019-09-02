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


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'register/:id', component: RegisterComponent,canActivate:[AuthGuard]},
  {path: 'registerAdmin/:id', component: RegisterAdminComponent ,canActivate:[AuthGuard]},
  {path: 'usuarios', component: UsuariosComponent,canActivate:[AuthGuard]},
  {path: 'tickets/:id', component: TicketsComponent,canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]},
  {path: 'usuariosNoFake', component: UsuariosNoFakeComponent,canActivate:[AuthGuard]},
  {path: 'updateclientecontrasena/:id', component: UpdateClienteContrasenaComponent,canActivate:[AuthGuard]},
  {path: 'updateusercontrasena/:id', component: UpdateUserContrasenaComponent,canActivate:[AuthGuard]},
  {path: 'listarTickets', component: ListarTicketsComponent,canActivate:[AuthGuard]},
  {path: 'otro', component: OtroComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'soporte', component: SoporteComponent},
  {path: 'listarSoporte', component: ListarSoporteComponent},
  {path: '**', redirectTo:'otro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
