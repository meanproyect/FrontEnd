import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginModels } from 'src/app/models/login-models';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: LoginModels;

  constructor(public rest: LoginService, private router: Router, private params: ActivatedRoute) {
    this.rest.login(this.login);
    this.login = new LoginModels('', '');
  }

  ngOnInit() {
  }
  Login() {
    this.rest.login(this.login).subscribe(res => {
      if (res.message == 'No se ha encontrado usuario') {
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'No se ha podido loguear',
          timer: 2000
        });
      } else {
        if (res.token) {
          localStorage.setItem('token', res.token);
          let token = localStorage.getItem('token');
          let toke1 = jwt_decode(token)
          localStorage.setItem('role', toke1.role);
          this.router.navigateByUrl('home');
        }

      }
    })
  }

}
