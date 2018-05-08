import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ StudentService ]
})
export class AppComponent {
   constructor(private studentService:StudentService){ }

   title = 'CSCI-31 Student Roster';
   studentList = [];

  ngOnInit() {
     this.studentList = this.studentService.listStudents();
 }
}
