import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { Repo } from '../repo'
import { environment } from  '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ReposerviceService {
  repo:Repo[];


  constructor(private http:HttpClient) { }
  getRepo(searchItem:string):Observable<any>{
    return this.http.get(environment.apiUrl + searchItem + '/repos?' + environment.gitToken)
  }

}
