import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResearcherService } from '../researcher.service';

@Component({
  selector: 'app-researcherdetail',
  templateUrl: './researcherdetail.component.html',
  styleUrls: ['./researcherdetail.component.css']
})
export class ResearcherdetailComponent implements OnInit {
  public researcher: any;

  constructor(private route:ActivatedRoute,
              private router: Router,
              private researcherService: ResearcherService) { }

  getResearcher(): void {
    const param = this.route.snapshot.paramMap.get('id');
    console.log(`calling getResearcher() in ResearchDetail component: ${param}`)
    this.researcherService.getResearcher(param)
       .subscribe((researcher)=>{
          console.log("got researcher: ", researcher);
          this.researcher = researcher;
       });
  }

  ngOnInit() {
    this.getResearcher();
  }

}
