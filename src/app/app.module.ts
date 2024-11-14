import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './components/user-list/user-list.component';
@NgModule({
declarations: [
AppComponent,
UserListComponent
],
imports: [
BrowserModule,
HttpClientModule,
NgxPaginationModule
],
providers: [UserService],
bootstrap: [AppComponent]
})
export class AppModule { }
