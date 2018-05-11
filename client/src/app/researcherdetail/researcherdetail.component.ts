import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResearcherService } from '../researcher.service';

@Component({
  selector: 'app-researcherdetail',
  templateUrl: './researcherdetail.component.html',
  styleUrls: ['./researcherdetail.component.css'],
  providers: [ResearcherService]
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

//      const researcher = this.researcherService.getResearcher(param);
//      console.log("researcher is: ");
//      return this.researcher = this.researcherService.getResearcher(param);
  }

  updateResearcher(obj:any):void {
     console.log('updateResearcher with updates', obj.first, obj.last, obj.address);
     this.researcher.first = obj.first;
     this.researcher.last = obj.last;
     this.researcher.address = obj.address;
     this.researcher.city = obj.city;
     this.researcher.state = obj.state;

     this.researcherService.updateResearcher(this.researcher._id, this.researcher)
       .subscribe((results)=> {
       location.reload();
       });
  }

  ngOnInit() {
    this.getResearcher();
  }
}
