import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { ResearcherService } from '../researcher.service';

@Component({
  selector: 'app-researcher',
  templateUrl: './researcher.component.html',
  styleUrls: ['./researcher.component.css'],
  providers: [ResearcherService]
})
export class ResearcherComponent implements OnInit {
  public researcherList: any;

  @Input() researcher;
  @Output() researcherEvent = new EventEmitter<string>();
  hideDetails : boolean = true;

  constructor(private route:ActivatedRoute,
              private router: Router,
              private researcherService: ResearcherService) { }

  viewResearcher(evt, researcher) {
     console.log("view researcher", evt, researcher);
     this.hideDetails = false;
  }

  edit(evt, researcher){
    console.log("view contact:", researcher.first, researcher.registered);
    this.researcher.registered = false;
  }

  ngOnInit() {
  }
}
