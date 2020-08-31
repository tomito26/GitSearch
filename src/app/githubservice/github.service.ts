import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GitUser  } from '../git-user';
import { environment } from '../../environments/environment'
import{ SearchComponent } from '../search/search.component'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user:GitUser[]= [];
  environment: any;


  constructor(private http:HttpClient) { }

  searchUser(searchItem:string){
    interface data {
      avatar_url: string,
      html_url: any,
      followers: number,
      following:number,
      login:string,
      company: string,
      public_repos:number,
      location:string,
      email:string
      
    }
    return new Promise((resolve,reject)=>{
      this.user = [];
      this.http.get<data>(environment.apiUrl + searchItem + environment.gitToken).toPromise().then((results)=>{
        this.user.push(results);
        resolve();
      },
      (error)=>{
        reject(console.log('Error occured'));
      }
      );


    });
  }

}



