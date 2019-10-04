import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  message: string;
  private sub: Subscription;

  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.setMessage();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  login() {
    this.message = 'Trying to log in ...';
    this.sub = this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
}
