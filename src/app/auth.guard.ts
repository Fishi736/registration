import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private q: AppService) { }



  canActivate() {
    if (this.q.IsUserLoggedIn) {
      return true;
    } else {
      return false;
    }
  }

}
