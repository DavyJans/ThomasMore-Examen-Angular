import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { CompanyService } from "../company.service";
import { Company } from "../company";


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
  company: Company = {
    id: 0,
    name: "",
    vacancies: [],
    city: "",
    pictureUrl: "",
    street: ""
  };
  //numVac: number = 3;

  constructor(private companyService: CompanyService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const companyId = this.activatedRouter.snapshot.paramMap.get('id');
    if (companyId != null) {
      this.companyService.getCompanyById(+companyId).subscribe(result => this.company = result);
    }
  }

  listVacancies(companyId: number) {
    this.router.navigate(['/vacancies', companyId]);
  }

}
