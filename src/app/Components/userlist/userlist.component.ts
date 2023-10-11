import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { User } from 'src/app/modals/user.modal';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'Address'];
  dataSource!: MatTableDataSource<User>;
  userData: User[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private api: ApiService,
    private router: Router,
    private snak: MatSnackBar
  ) {}

  ngOnInit() {
    this.getALlUsers();
  }

  ngAfterViewInit() {}

  getALlUsers() {
    this.api.getUser().subscribe(
      (res) => {
        this.userData = res;
        this.dataSource = new MatTableDataSource(this.userData);

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

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

  applyFilter(e: any) {
    const filterValue = (e.target as HTMLInputElement).value;

    const filterData = this.userData.slice().filter((i) => {
      return (
        i.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        i.email.toLocaleLowerCase().includes(filterValue.toLowerCase())
      );
    });

    console.log(filterData);

    this.dataSource = new MatTableDataSource(filterData);
  }
}
