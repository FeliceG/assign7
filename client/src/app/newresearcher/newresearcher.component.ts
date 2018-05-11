import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResearcherService } from '../researcher.service';

@Component({
  selector: 'app-newresearcher',
  templateUrl: './newresearcher.component.html',
  styleUrls: ['./newresearcher.component.css'],
  providers: [ResearcherService]
})
export class NewresearcherComponent implements OnInit {
  public researcher: any;

  constructor(private route:ActivatedRoute,
              private router: Router,
              private researcherService: ResearcherService) { }

  save(newresearcherForm): void {
    let formData = new FormData();
    formData.append('first', this.first);
    formData.append('last', this.last);
    formData.append('address', this.address);
    formData.append('city', this.city);
    formData.append('state', this.state);
       });

  ngOnInit() {
  }

}
