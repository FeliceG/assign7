import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherdetailComponent } from './researcherdetail.component';

describe('ResearcherdetailComponent', () => {
  let component: ResearcherdetailComponent;
  let fixture: ComponentFixture<ResearcherdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearcherdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearcherdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
