import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserCardComponent } from './user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';

// @NgModule({
//   declarations: [
//     AppComponent,
//     UserSearchComponent,
//     UserCardComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     HttpClientModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
@NgModule({
  declarations: [AppComponent, UserSearchComponent, UserCardComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule], // Agrega AppRoutingModule aquí
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
