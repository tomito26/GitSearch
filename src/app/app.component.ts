import { Component } from '@angular/core';
import { GitUser } from './git-user';
import { GithubService } from './githubservice/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 user:GitUser[] = []

 constructor(private gitService:GithubService){

 }
 

 ngOnInit() {
   
 }

 

}
