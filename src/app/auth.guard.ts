import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private q: AppService, private router: Router,) { }



  canActivate() {
    if (this.q.IsUserLoggedIn) {
      return true;
    } else {
      return false;
      this.router.navigate(['/post-list'])
    }

  }
}