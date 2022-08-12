import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacancy } from '../vacancy';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.scss']
})
export class VacancyListComponent implements OnInit {

  vacancies$: Observable<Vacancy[]> = new Observable<Vacancy[]>();

  constructor(private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.vacancies$ = this.vacancyService.getVacancies();
  }


}
