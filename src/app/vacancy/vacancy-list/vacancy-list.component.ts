import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Company } from 'src/app/company/company';
import { Vacancy } from '../vacancy';
import { VacancyService } from '../vacancy.service';


@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.scss']
})
export class VacancyListComponent implements OnInit {

  vacancies$: Observable<Vacancy[]> = new Observable<Vacancy[]>();

  constructor(private vacancyService: VacancyService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

    const companyId = this.activatedRouter.snapshot.paramMap.get('companyId');
    console.log(companyId);
    if (companyId != null) {
      this.vacancies$ = this.vacancyService.getVacanciesByCompany(+companyId);
    }
    else {
      this.vacancies$ = this.vacancyService.getVacancies();
    }
  }


}
