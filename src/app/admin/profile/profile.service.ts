import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AuthService } from "src/app/security/auth.service";
import { User } from "src/app/security/user";


@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private httpClient: HttpClient, private authService: AuthService) { }



    getUser(): User | null {
        return this.authService.getUser() ?? null;

    }

    updateUser(user: User | null): Observable<User> {
        return this.httpClient.put<User>("https://portfolioapidjan.azurewebsites.net/users/update/", user);

    }


}