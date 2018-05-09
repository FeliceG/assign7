import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ResearcherService {
  private apiurl = environment.apiurl;

researcherList = [
  {
     _id: 1,
     first: 'Felice',
     last: 'Gardner',
     address: '87 Blossomcrest Road',
     city: 'Lexington',
     state: 'MA',
     registered: true
  },
  {
      _id: 2,
      first: 'Kira',
      last: 'Gardner',
      address: '87 Blossomcrest Road',
      city: 'Lexington',
      state: 'MA',
      registered: true
  },
  {
      _id: 3,
      first: 'Bill',
      last: 'Gardner',
      address: '87 Blossomcrest Road',
      city: 'Lexington',
      state: 'MA',
      registered: true
  }
];

constructor(private http:HttpClient) { }
  //basic list method
  listResearchers() {
//    return this.researcherList;
    console.log(this.apiurl + this.researcherList);
    return this.http.get( this.apiurl + '/roster' + this.researcherList);
  }

  //"getOne" method, returns item from the array with _id == id
    getResearcher(id){
      return this.http.get( this.apiurl + '/researcher/' + id);
  }

}
