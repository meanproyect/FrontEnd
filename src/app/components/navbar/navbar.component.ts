import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public islogged: boolean = false;
  public token = localStorage.getItem('token');
  public token1 =  jwt_decode(this.token);
  public rol = this.token1.role;
  constructor(private router: Router) { }

  ngOnInit() {
    this.getAuth();
    console.log(this.rol);
  }
  getAuth(){
    if(localStorage.getItem('auth') == 'true'){
      this.islogged = true;
      
    }else{
      this.islogged = false;
      
    }
  }

  onLogout(){
    localStorage.setItem('auth', 'false');
    this.router.navigateByUrl('login');
    localStorage.setItem('token', 'false');
    this.getAuth();
  }

}
