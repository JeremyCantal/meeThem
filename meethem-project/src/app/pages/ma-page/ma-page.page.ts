import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-ma-page',
  templateUrl: './ma-page.page.html',
  styleUrls: ['./ma-page.page.scss'],
})
export class MaPagePage implements OnInit {

  user = 1;
  users: Array<User> = new Array<User>();
  storageStatus: any ;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(this.user).subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

}
