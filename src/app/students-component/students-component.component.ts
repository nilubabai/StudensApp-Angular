import { Component, OnInit } from '@angular/core';
import { StudentSvcService } from '../student-svc.service';

@Component({
  selector: 'app-students-component',
  templateUrl: './students-component.component.html',
  styleUrls: ['./students-component.component.css'],
})
export class StudentsComponentComponent {
  public gridData: any = [];

  constructor(private _studentSvc: StudentSvcService) {
    // this.students = []
  }

  //  this.gridData = this.students;

  ngOnInit() {
    this._studentSvc.getStudentsData().subscribe(({ students }) => {
      console.log(students);
      this.gridData = students;
    });
  }
}
