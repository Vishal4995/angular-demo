import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { HistoryUserComponent } from './history-user/history-user.component';
import { NgModule } from '@angular/core';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchUserComponent },
  { path: 'history', component: HistoryUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }