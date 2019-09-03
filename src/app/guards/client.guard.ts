import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var token = localStorage.getItem('token');
      

      if(token != 'false'){
        var token1 = jwt_decode(token);
        if(token1.role != 'CLIENT'){
          this.router.navigateByUrl('/home');
        }
        
      }else{
        this.router.navigateByUrl('/home');
      }
    return true;
  }
  
}
