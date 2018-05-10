import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ResearcherService {
  private apiurl = environment.apiurl;


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
