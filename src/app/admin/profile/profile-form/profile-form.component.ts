import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/security/user';
import { ProfileService } from '../profile.service';
import { Role } from 'src/app/security/role';
import { AuthService } from 'src/app/security/auth.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  keys: number[];
  roles = Role;
  selectedValue: number;
  message: string = '';

  constructor(private profileService: ProfileService, private authService: AuthService, private router: Router) {
    this.keys = Object.keys(this.roles).filter(k => !isNaN(Number(k))).map(Number);

  }

  user: User | null;

  ngOnInit(): void {

    this.user = this.profileService.getUser();
    this.selectedValue = this.user!.role;

  }

  saveChanges(): void {
    console.log(JSON.stringify(this.user));

    this.profileService.updateUser(this.user).subscribe(result => {
      console.log(result)

      localStorage.setItem('id', result.id.toString());
      localStorage.setItem('userName', result.userName);
      localStorage.setItem('role', JSON.stringify(result.role));
      localStorage.setItem('firstName', result.firstName);
      localStorage.setItem('lastName', result.lastName);
      localStorage.setItem('street', result.street);
      localStorage.setItem('city', result.city);

      this.message = 'Changes saved! Redirected to homepage in few seconds.';

      setTimeout(() => {
        this.router.navigate(['']);
      }, 5000);

    });
  }

  onRoleChange(value: number) {
    let role = this.roles[value];
    this.user!.role = <Role>value;
  }

}
