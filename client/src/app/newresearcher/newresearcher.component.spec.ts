import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewresearcherComponent } from './newresearcher.component';

describe('NewresearcherComponent', () => {
  let component: NewresearcherComponent;
  let fixture: ComponentFixture<NewresearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewresearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewresearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
