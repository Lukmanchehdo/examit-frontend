import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/ShareService';

@Component({
  selector: 'app-student-mrg',
  templateUrl: './student-mrg.component.html',
  styleUrls: ['./student-mrg.component.css'],
})
export class StudentMrgComponent implements OnInit {
  students: any;

  student = {
    id: null,
    code: null,
    fullname: null,
    room: null,
  };

  constructor(private http: HttpClient, private shareService: ShareService) {}

  ngOnInit(): void {
    this.loadestudent();
  }

  loadestudent() {
    this.http
      .get(this.shareService.serverPath + '/student/')
      .subscribe((res: any) => {
        this.students = res.student;
        // console.log(this.students);
      });
  }

  saveStudent() {
    if (this.student.id == null) {
      var path = this.shareService.serverPath + '/student/save';
    } else {
      var path = this.shareService.serverPath + '/student/update';
    }

    this.http.post(path, this.student).subscribe((res: any) => {
      this.students = res.student;

      alert(res.message);
      this.loadestudent();
      this.student = {
        id: null,
        code: null,
        fullname: null,
        room: null,
      };
      // console.log(this.students);
    });
  }

  editstudent(item: any) {
    this.student = item;
  }

  delstudent(item: any) {
    if (confirm('Are you sure Deletestudent ?')) {
      //console.log(student);
      var params = {
        id: item.id,
      };
      this.http
        .post(
          this.shareService.serverPath + '/student/delete/' + item.id,
          params
        )
        .subscribe((res: any) => {
          //console.log(res.message);
          alert(res.message);
          this.loadestudent();
        });
    }
  }
}
