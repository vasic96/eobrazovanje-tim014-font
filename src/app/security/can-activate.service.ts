import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class CanActivateService implements CanActivate {
  
  constructor(private authenticationService: AuthenticationService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authenticationService.isLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
