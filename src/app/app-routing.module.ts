import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register/:id', component: RegisterComponent},
  {path: 'registerAdmin', component: RegisterAdminComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'tickets', component: TicketsComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
