import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacancy } from '../vacancy/vacancy';
import { VacancyService } from '../vacancy/vacancy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  vacancies$: Observable<Vacancy[]> = new Observable<Vacancy[]>();

  constructor(private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.vacancies$ = this.vacancyService.getVacancies();
  }


}
