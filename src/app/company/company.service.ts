import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { AuthService } from "../security/auth.service";
import { Company } from './company';


@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    constructor(private httpClient: HttpClient, public authService: AuthService) {
    }

    getCompanies(): Observable<Company[]> {
        return this.httpClient.get<Company[]>("https://portfolioapidjan.azurewebsites.net/companies/");
    }

}
