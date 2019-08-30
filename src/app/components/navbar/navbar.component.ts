import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public islogged: boolean = false;
  public rol = localStorage.getItem('role');
  constructor(private router: Router) { }

  ngOnInit() {
    this.getAuth();
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
    this.getAuth();
  }

}
