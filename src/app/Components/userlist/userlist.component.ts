import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private api: ApiService,
    private router: Router,
    private snak: MatSnackBar
  ) {}

  ngOnInit() {
    this.getALlUsers();
  }

  getALlUsers() {
    this.api.getUser().subscribe(
      (res) => {
        this.userData = res;
        console.log(this.userData);
      },
      (error) => {
        console.log(error);
        this.snak.open('Something Went Wrong', 'Ok', { duration: 2000 });
      }
    );
  }

  openAlbums(userId: number) {
    if (!userId) this.snak.open('Pass UserID', 'Ok', { duration: 1000 });

    this.router.navigate([userId, 'albums']);
  }
}
