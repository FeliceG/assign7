import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student;
  @Output() studentEvent = new EventEmitter<string>();

  constructor() {}

  handleClick(event, student){
    console.log("view contact:", student.first, student.registered);
    this.student.registered = false;
  }


  ngOnInit() {
  }

}
