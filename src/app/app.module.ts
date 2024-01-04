// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { HistoryUserComponent } from './history-user/history-user.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    HomeComponent,
    SearchUserComponent,
    HistoryUserComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([]), SearchUserComponent,HttpClientModule],

  exports: [
    HomeComponent
  ],
  providers: [DataService],
  bootstrap: [HomeComponent],
})
export class AppModule {}
