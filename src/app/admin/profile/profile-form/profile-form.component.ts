import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/security/user';
import { ProfileService } from '../profile.service';
import { Role } from 'src/app/security/role';
import { AuthService } from 'src/app/security/auth.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';


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
  isImageChanged: boolean = false;
  imageUrl: string;
  isSaving: boolean = false;
  enableRoleChange: boolean = false;

  constructor(private profileService: ProfileService, private authService: AuthService, private router: Router, private angularFireStorage: AngularFireStorage) {
    this.keys = Object.keys(this.roles).filter(k => !isNaN(Number(k))).map(Number);

  }

  user: User | null;

  // Uploading image
  ref: AngularFireStorageReference | undefined;
  task: AngularFireUploadTask | undefined;
  filePath = `pictures/`;
  imageFile: any;
  uploadProgress: number | undefined;

  ngOnInit(): void {

    this.user = this.profileService.getUser();
    this.selectedValue = this.user!.role;
    this.enableRoleChange = this.authService.isSuperAdmin();

  }

  onImageSelected(event: any): void {
    // create a random id
    const randomId = Math.random().toString(36).substring(2);
    this.filePath += randomId;
    // create a reference to the storage bucket location
    this.ref = this.angularFireStorage.ref(this.filePath);
    this.imageFile = event.target.files[0];
    this.isImageChanged = true;
  }



  saveChanges(): void {


    if (this.isImageChanged) {
      this.isSaving = true
      this.task = this.angularFireStorage.upload(this.filePath, this.imageFile);
      this.task.snapshotChanges().subscribe(result => {
        this.ref?.getDownloadURL().subscribe(url => {

          this.user!.imageUrl = url;
          console.log(url);
          this.saveData();

        });
      });

      this.task.percentageChanges().subscribe(p => this.uploadProgress = p);
    }
    else {
      this.saveData();
    }


  }

  saveData() {
    this.profileService.updateUser(this.user).subscribe(result => {

      localStorage.setItem('id', result.id.toString());
      localStorage.setItem('userName', result.userName);
      localStorage.setItem('role', JSON.stringify(result.role));
      localStorage.setItem('firstName', result.firstName);
      localStorage.setItem('lastName', result.lastName);
      localStorage.setItem('street', result.street);
      localStorage.setItem('city', result.city);
      localStorage.setItem('imageUrl', result.imageUrl);

      this.message = 'Changes saved! Redirected to homepage in few seconds.';

      setTimeout(() => {
        this.isSaving = false;
        this.router.navigate(['']);
      }, 5000);

    });
  }

  onRoleChange(value: number) {
    let role = this.roles[value];
    this.user!.role = <Role>value;
  }

}
