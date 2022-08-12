import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from './company';
import { Location } from "@angular/common";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  @Input() company: Company = {
    id: 0,
    name: ""
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
