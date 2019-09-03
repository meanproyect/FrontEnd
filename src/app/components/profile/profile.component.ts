import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { LoginService } from 'src/app/services/login.service';
import * as jwt_decode from 'jwt-decode';
import { AdministratrModel } from 'src/app/models/administratr-model';
import { ClientModels } from 'src/app/models/client-models';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  client: ClientModels;
  clientes = [];
  admin: AdministratrModel;
  administrators = [];

  profile: Profile;
  users: []
  public token = localStorage.getItem('token');
  public token1 = jwt_decode(this.token);
  public role = this.token1.role;
  
  constructor(private rest: LoginService) { 
    this.profile = new Profile('','');
  }

  ngOnInit() {
   this.getProfile();
  }

  getProfile(){
    var token = localStorage.getItem('token');
    var token1 = jwt_decode(token);
    this.profile.code = token1.code;
    this.profile.role = token1.role;
    this.rest.getUser(this.profile).subscribe(res =>{
      console.log(res);
      this.users = res.user;
    })
  }
}
