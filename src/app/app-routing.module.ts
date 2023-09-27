import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './Components/albums/albums.component';
import { UserlistComponent } from './Components/userlist/userlist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'userlist',
    pathMatch: 'full',
  },
  {
    path: 'userlist',
    component: UserlistComponent,
  },
  {
    path: ':id/albums',
    component: AlbumsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
