import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ResearcherService } from '../researcher.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
   researcherList: any = [];

 constructor(private researcherService: ResearcherService){ }

  ngOnInit() {
    console.log('in roster ngOnInit');
    this.researcherService.listResearchers()
      .subscribe((researchers)=> {
        console.log('got researchers ', researchers);
        this.researcherList = researchers;
    });
  }
}
