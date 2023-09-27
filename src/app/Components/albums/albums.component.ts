import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ApiService } from 'src/app/Services/api.service';
import { Albums } from 'src/app/modals/albums.modal';
import { PhotoDialogComponent } from '../dialogs/photo-dialog/photo-dialog.component';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  displayedColumns: string[] = ['title'];

  userAblums: Albums[] = [];
  disabledButton: boolean = false;
  userID: number = 0;
  albumsIDs: number[] = [];

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.params.subscribe((p) => {
      this.userID = parseInt(p['id']);
    });
    this.getUserAlbums();
  }

  getUserAlbums() {
    this.api.getUserAlbums().subscribe((res) => {
      res.forEach((q) => {
        q.isSelected = false;
        q.isClick = false;
      });

      this.userAblums = res.filter((f) => {
        return f.userId == this.userID;
      });
    });
  }

  selectAlbum(id: number) {
    const selectedItem = this.userAblums.filter((i) => {
      return i.isSelected == true;
    });

    if (selectedItem.length == 0) {
      this.disabledButton = false;
    } else {
      this.disabledButton = true;
    }

    this.albumsIDs = selectedItem.map((obj) => obj.id);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PhotoDialogComponent, {
      data: { albumIDs: this.albumsIDs },
      width: '100vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
