import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserCardComponent } from './user-card/user-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-search', pathMatch: 'full' },
  { path: 'user-search', component: UserSearchComponent },
  { path: 'user-card', component: UserCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
