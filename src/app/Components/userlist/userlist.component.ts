import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { User } from 'src/app/modals/user.modal';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'Address'];

  userData: User[] = [];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.getALlUsers();
  }

  getALlUsers() {
    this.api.getUser().subscribe((res) => {
      this.userData = res;
      console.log(this.userData);
    });
  }

  openAlbums(userId: number) {
    if (!userId) console.log('User id is not');

    this.router.navigate([userId, 'albums']);
  }
}
