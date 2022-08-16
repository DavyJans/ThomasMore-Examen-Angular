import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Vacancy } from './vacancy';

@Component({
  selector: 'app-vacancy',
  templateUrl: 'vacancy.component.html',
  styleUrls: ['vacancy.component.scss']
})
export class VacancyComponent implements OnInit {

  today: Date = new Date();
  deadline: Date = new Date();

  testDateString: string = '08/21/2022';

  daysLeft: number = 0;
  isActive: boolean = true;

  @Input() vacancy: Vacancy = {
    id: 0,
    functionTitle: "",
    jobDescriptionTitle: "",
    jobDescriptionContent: "",
    profileContent: "",
    offerContent: "",
    otherContent: "",
    author: "",
    editor: "",
    publishDate: "",
    closingDate: "",
    location: "",
    companyId: 1,
    statusId: 1,
    authorId: 1,
    company: { id: 0, name: '', vacancies: [] }
  };

  @Input() isDetail: boolean = false;

  constructor(private router: Router, private _location: Location) {
  }

  ngOnInit(): void {
    let testDate = new Date(this.testDateString);
    //this.deadline = new Date(this.vacancy.publishDate);
    this.deadline = testDate;

    let dateDifference = this.deadline.getTime() - this.today.getTime();
    this.daysLeft = Math.floor(dateDifference / (1000 * 3600 * 24)) + 1;

    if (this.daysLeft < 0) {
      this.isActive = false;
    }
  }

  detail(id: number) {
    this.router.navigate(['/vacancy', id])
  }

  goBack() {
    this._location.back();
  }

}
