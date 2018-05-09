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
    return this.http.get( this.apiurl + 'researcher');
//      return this.researcherList;
  }

  //"getOne" method, returns item from the array with _id == id
    getResearcher(id){
      return this.http.get( this.apiurl + 'researcher/' + id);
//      return this.researcherList.find((el)=> {return el._id == id});
  }

updateResearcher(id, data){
  return this.http.put(this.apiurl + 'researcher/' + id, data);
}

}
