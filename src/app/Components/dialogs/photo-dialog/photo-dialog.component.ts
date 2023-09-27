import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/api.service';
import { Photos } from 'src/app/modals/photos.modal';

interface DialogData {
  albumIDs: number[];
}

@Component({
  selector: 'app-photo-dialog',
  templateUrl: './photo-dialog.component.html',
  styleUrls: ['./photo-dialog.component.css'],
})
export class PhotoDialogComponent implements OnInit {
  albumsPhotos: Photos[] = [];
  ablumNumber: number = 0;

  constructor(
    public dialogRef: MatDialogRef<PhotoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.getPhotosOfAlbums();
  }

  onNoClick() {
    this.dialogRef.close();
  }

  getPhotosOfAlbums() {
    this.api.getUserPhotos().subscribe((res) => {
      console.log(this.data.albumIDs);

      if (this.data.albumIDs.length == 1) {
        this.albumsPhotos = res.filter((obj) => {
          this.ablumNumber = this.data.albumIDs[0];
          return obj.albumId == this.data.albumIDs[0];
        });

        console.log(this.albumsPhotos, '42 line');
      } else {
        let counter = 0;

        this.albumsPhotos = res.filter((obj) => {
          this.ablumNumber = this.data.albumIDs[counter];
          return obj.albumId == this.data.albumIDs[counter];
        });
        counter += 1;

        let interval = setInterval(() => {
          this.albumsPhotos = res.filter((obj) => {
            this.ablumNumber = this.data.albumIDs[counter];
            return obj.albumId == this.data.albumIDs[counter];
          });

          counter += 1;

          if (counter == this.data.albumIDs.length) counter = 0;

          this.dialogRef.afterClosed().subscribe((result) => {
            clearInterval(interval);
          });

          console.log(this.albumsPhotos, 'line 59');
        }, 20000);
      }
    });
  }
}
