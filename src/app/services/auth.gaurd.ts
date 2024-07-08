import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { EnvService } from 'src/app/services/env.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService,
    private _env: EnvService
  ) { }

  canActivate(routeerstate?: any) {
    // let url = routeerstate._routerState.url
    // if (this.auth.authenticated) {
    //   return true;
    // } else {
    //   this.router.navigate(["./sessions/signin/"], { queryParams: {"redirect": btoa(url)} })
    // }
    //   this.router.navigate(["./sessions/signin/"])
      return true;
  }
}
