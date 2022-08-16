import { Injectable } from '@angular/core';
import { Vacancy } from './vacancy';
import { Company } from '../company/company';
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

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {

    return timer(1, 3000).pipe(switchMap(() => this.httpClient.get<Vacancy[]>("https://portfolioapidjan.azurewebsites.net/vacancies/ByCompanyId?id=" + companyId)));

  }



  getVacancyById(id: number): Observable<Vacancy> {
    return this.httpClient.get<Vacancy>("https://portfolioapidjan.azurewebsites.net/vacancies/" + id);
  }
}
