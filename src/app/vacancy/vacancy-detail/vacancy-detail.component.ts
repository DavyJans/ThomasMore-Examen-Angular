import { Component, OnInit } from '@angular/core';
import { Vacancy } from "../vacancy";
import { VacancyService } from "../vacancy.service";
import { ActivatedRoute } from "@angular/router";
import { Company } from "../../company/company";
import {resolve} from "@angular/compiler-cli/src/ngtsc/file_system";

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.scss']
})
export class VacancyDetailComponent implements OnInit {
  vacancy: Vacancy = {
    id: 0,
    functionTitle: "",
    jobDescriptionTitle: "",
    jobDescriptionContent: "",
    profileContent: "",
    offerContent: "",
    otherContent: "",
    author: "",
    publishDate: "",
    closingDate: "",
    location: "",
    editor: "",
    companyId: 0,
    statusId: 0,
    authorId: 0,
    company: {id: 0, name: "", vacancies: []}
  }


  constructor(private vacancyService: VacancyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const vacancyId = this.route.snapshot.paramMap.get('id');
    if(vacancyId != null) {
      this.vacancyService.getVacancyById(+vacancyId).subscribe(result => this.vacancy = result);
    }
  }

}
