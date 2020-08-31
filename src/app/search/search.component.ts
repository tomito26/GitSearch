import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GitUser } from '../git-user';
import { formatCurrency } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchItem:GitUser;
  @Output() searchUser = new EventEmitter<any>();

  constructor() { }

  showUser(form: NgForm){
    this.searchUser.emit(this.searchItem)
    form.resetForm()
    
  }

  ngOnInit() {
  }

}
