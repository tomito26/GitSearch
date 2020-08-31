import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { GithubService } from './githubservice/github.service';
import { ReposComponent } from './repos/repos.component';
import { ReposerviceService } from '../app/reposervice/reposervice.service';
import { UserProfileComponent } from './user-profile/user-profile.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ReposComponent,
    UserProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubService,ReposerviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
