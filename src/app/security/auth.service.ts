import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { UserResponse } from './userResponse';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  getUser(): User | null {
    if (this.isLoggedIn()) {
      return {
        id: parseInt(localStorage.getItem('id') ?? '0'),
        userName: localStorage.getItem('userName') ?? '',
        password: '',
        token: this.getToken(),
        firstName: localStorage.getItem('firstName') ?? '',
        lastName: localStorage.getItem('lastName') ?? '',
        role: +localStorage.getItem('role')! ?? Role.Guest,
        city: localStorage.getItem('city') ?? '',
        street: localStorage.getItem('street') ?? ''
      };
    } else {
      return null;
    }
  }

  deleteToken(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  loggedInGreeting(): string {
    return `${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`;
  }

  isSuperAdmin(): boolean {
    let role = +localStorage.getItem('role')!;
    return this.isLoggedIn() && role == Role.SuperAdmin
  }

  isCompanyAdmin(): boolean {
    let role = +localStorage.getItem('role')!;
    return this.isLoggedIn() && role == Role.CompanyAdmin
  }


  authenticate(user: User): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>('https://portfolioapidjan.azurewebsites.net/users/authenticate', user);
  }

  register(user: User): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>('https://portfolioapidjan.azurewebsites.net/users/register', user);
  }
}