import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/shared/auth.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  users: Array<User> = new Array<User>();
  storageStatus: any ;

  ionicForm = this.formBuilder.group({
    userid: [null],
    name: ['', [Validators.required, Validators.minLength(2)]],
    lastname: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  
  isSubmitted = false;

  isSuccessFull = false;
  isSignUpFailed = false;

  errorMessage = '';


  constructor(public formBuilder: FormBuilder, private authService: AuthService, private router: Router, private userService: UserService, private toast: ToastController) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  saveUser() {
    this.userService.addUser(this.ionicForm.value).subscribe(async data => {
      console.log(data);
      let toast = await this.toast.create({
        message: 'Person created',
        duration: 2500
      });
      toast.present();
      this.userService.getAllUsers().subscribe(data => {
        console.log(data);
        this.users = data;
      });
    })
  }

  deleteUser(userid: any) {
    this.userService.deleteUser(userid).subscribe(async data => {
      console.log(data);
      let toast = await this.toast.create({
        message: 'Person deleted',
        duration: 2500
      });
      toast.present();
      this.userService.getAllUsers().subscribe(data => {
        console.log(data);
        this.users = data;
      });
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

}
