import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

import { AlbumsComponent } from './Components/albums/albums.component';
import { UserlistComponent } from './Components/userlist/userlist.component';
import { ApiService } from './Services/api.service';

import { PhotoDialogComponent } from './Components/dialogs/photo-dialog/photo-dialog.component';
import { TsTableComponent } from './Shared/Components/ts-table/ts-table.component';
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AlbumsComponent,
    PhotoDialogComponent,
    TsTableComponent,
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
    MatPaginatorModule,
    MatSelectModule,
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSortModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  exports: [PhotoDialogComponent, TsTableComponent],
})
export class AppModule {}
