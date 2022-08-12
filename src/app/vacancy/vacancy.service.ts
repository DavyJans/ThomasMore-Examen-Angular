import { Injectable } from '@angular/core';
import { Vacancy } from './vacancy';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { AuthService } from "../security/auth.service";


@Injectable({
    providedIn: 'root'
})
export class VacancyService {

    constructor(private httpClient: HttpClient, public authService: AuthService) {
    }

    getVacancies(): Observable<Vacancy[]> {
        return timer(1, 3000).pipe(switchMap(() => this.httpClient.get<Vacancy[]>("https://portfolioapidjan.azurewebsites.net/vacancies")));
    }


}
