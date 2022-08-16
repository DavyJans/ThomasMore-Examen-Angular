import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Role } from '../role';


@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {


  user: User = { id: 0, firstName: '', lastName: '', role: Role.Guest, userName: '', password: '', token: '', city: '', street: '', imageUrl: '' };

  isSubmitted: boolean = false;
  errorMessage: string = '';

  isLogin: boolean = false;
  isRegister: boolean = false;
  isLogout: boolean = false;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    switch (this.router.url) {
      case '/login': {
        this.isLogin = true;
        break;
      }
      case '/logout': {
        this.isLogout = true;
        this.authService.deleteToken();
        this.router.navigate(['']);
        break;
      }
      case '/register': {
        this.isRegister = true;
        break;
      }
      default: {
        this.isLogin = true;
        break;
      }
    }
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.isLogin) {
      this.authService.authenticate(this.user).subscribe(result => {
        this.errorMessage = '';
        // save access token localstorage
        //   user: User = { id: 0, firstName: '', lastName: '', username: '', role: Role.Guest ,email: '', password: '', token: '' };
        localStorage.setItem('token', result.token);
        localStorage.setItem('id', result.user.id.toString());
        localStorage.setItem('userName', result.user.userName);
        localStorage.setItem('role', JSON.stringify(result.user.role));
        localStorage.setItem('firstName', result.user.firstName);
        localStorage.setItem('lastName', result.user.lastName);
        localStorage.setItem('street', result.user.street);
        localStorage.setItem('city', result.user.city);
        localStorage.setItem('imageUrl', result.user.imageUrl);

        this.router.navigate(['']);
      }, error => {
        this.errorMessage = 'Email/password not correct!';
        this.isSubmitted = false;
      });
    } else {
      this.authService.register(this.user).subscribe(result => {
        this.errorMessage = '';
        // save access token localstorage
        //   user: User = { id: 0, firstName: '', lastName: '', username: '', role: Role.Guest ,email: '', password: '', token: '' };
        localStorage.setItem('token', result.token);
        localStorage.setItem('id', result.user.id.toString());
        localStorage.setItem('userName', result.user.userName);
        localStorage.setItem('role', JSON.stringify(result.user.role));
        localStorage.setItem('firstName', result.user.firstName);
        localStorage.setItem('lastName', result.user.lastName);
        localStorage.setItem('street', result.user.street);
        localStorage.setItem('city', result.user.city);

        this.router.navigate(['']);
      }, error => {
        this.errorMessage = 'Registration failed';
        this.isSubmitted = false;
      });
    }
  }
}