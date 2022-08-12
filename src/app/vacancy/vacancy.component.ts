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
    companyId: 1,
    statusId: 1,
    authorId: 1,
    company: { id: 0, name: '' }
  };


  @Input() isDetail: boolean = false;



  constructor(private router: Router, private _location: Location) {
  }

  ngOnInit(): void {
  }

  // detail(id: number) {
  //   this.router.navigate(['/vacancy', id])
  // }

  /*
  //simple goBack-script, where backRoute is defined in @Input-parameter; still fixed routing though!
  goBack() {
    this.router.navigate([this.backRoute])
  }
  */

  goBack() {
    this._location.back();
  }

}