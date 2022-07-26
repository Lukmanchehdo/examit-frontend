import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/ShareService';

@Component({
  selector: 'app-borrow-mrg',
  templateUrl: './borrow-mrg.component.html',
  styleUrls: ['./borrow-mrg.component.css'],
})
export class BorrowMrgComponent implements OnInit {
  borrows: any;
  students: any;
  devices: any;
  borrow_lists: any;

  borrow = {
    id: null,
    student_id: null,
    date_time: null,
    fullname: null,
    device_id: null,
    num: null,
  };

  constructor(private http: HttpClient, private shareService: ShareService) {}

  ngOnInit(): void {
    this.loadeborrow();
    this.loadestudent();
    this.loadedevice();
  }

  loadeborrow() {
    this.http
      .get(this.shareService.serverPath + '/borrow/')
      .subscribe((res: any) => {
        this.borrows = res.borrow;
        // console.log(this.borrows);
      });
  }

  loadestudent() {
    this.http
      .get(this.shareService.serverPath + '/student/')
      .subscribe((res: any) => {
        this.students = res.student;
        // console.log(this.students);
      });
  }

  loadedevice() {
    this.http
      .get(this.shareService.serverPath + '/device/')
      .subscribe((res: any) => {
        this.devices = res.devicet;
        // console.log(this.students);
      });
  }

  saveborrow() {
    if (this.borrow.id == null) {
      var path = this.shareService.serverPath + '/borrow/save';
    } else {
      var path = this.shareService.serverPath + '/borrow/update';
    }

    this.http.post(path, this.borrow).subscribe((res: any) => {
      this.borrows = res.borrow;

      alert(res.message);
      this.loadeborrow();
      this.borrow = {
        id: null,
        student_id: null,
        date_time: null,
        fullname: null,
        device_id: null,
        num: null,
      };
      // console.log(this.borrows);
    });
  }

  editborrow(item: any) {
    this.borrow = item;
  }

  delborrow(item: any) {
    if (confirm('Are you sure Deleteborrow ?')) {
      //console.log(borrow);
      var params = {
        id: item.id,
      };
      this.http
        .post(
          this.shareService.serverPath + '/borrow/delete/' + item.id,
          params
        )
        .subscribe((res: any) => {
          //console.log(res.message);
          alert(res.message);
          this.loadeborrow();
        });
    }
  }

  viewborrow(item: any) {
    this.http
      .get(this.shareService.serverPath + '/borrow_lists/' + item.id)
      .subscribe((res: any) => {
        this.borrow_lists = res.borrow_lists;
        // console.log(this.students);
      });
  }
}
