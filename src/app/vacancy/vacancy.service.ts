import { Injectable } from '@angular/core';
import { Vacancy } from './vacancy';
import { Company } from '../company/company';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { AuthService } from "../security/auth.service";
import { User } from '../security/user';


@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private httpClient: HttpClient, public authService: AuthService) {
  }



  getVacancies(): Observable<Vacancy[]> {
    let date = new Date();
    date.getDay
    return timer(1, 3000).pipe(switchMap(() => this.httpClient.get<Vacancy[]>("https://portfolioapidjan.azurewebsites.net/vacancies"))).pipe(
      map(results => results.filter(result => {

        let closingDate = new Date(result.closingDate);
        let today = new Date()

        return closingDate > today;

      })
      ));

  }

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    let today = new Date();
    return timer(1, 3000).pipe(switchMap(() => this.httpClient.get<Vacancy[]>("https://portfolioapidjan.azurewebsites.net/vacancies/ByCompanyId?id=" + companyId))).pipe(
      map(results => results.filter(result => {

        let closingDate = new Date(result.closingDate);
        let today = new Date()


        return closingDate > today;

      })
      ));

  }

  apply(user: User, id: number): Observable<User> {

    let body = {
      user,
      id
    }

    return this.httpClient.post<User>("https://portfolioapidjan.azurewebsites.net/vacancies/apply/", body)

  }

  getVacancyById(id: number): Observable<Vacancy> {
    return this.httpClient.get<Vacancy>("https://portfolioapidjan.azurewebsites.net/vacancies/" + id);
  }
}
