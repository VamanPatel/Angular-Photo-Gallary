import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserlistComponent } from './Components/userlist/userlist.component';
import { AlbumsComponent } from './Components/albums/albums.component';
import { MatCardModule } from '@angular/material/card';

import { ApiService } from './Services/api.service';
import { FormsModule } from '@angular/forms';
import { PhotoDialogComponent } from './Components/dialogs/photo-dialog/photo-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AlbumsComponent,
    PhotoDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  exports: [PhotoDialogComponent],
})
export class AppModule {}
