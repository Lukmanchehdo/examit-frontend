import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/ShareService';

@Component({
  selector: 'app-device-mrg',
  templateUrl: './device-mrg.component.html',
  styleUrls: ['./device-mrg.component.css'],
})
export class DeviceMrgComponent implements OnInit {
  devices: any;

  device = {
    id: null,
    name: null,
    remain: null,
  };

  constructor(private http: HttpClient, private shareService: ShareService) {}

  ngOnInit(): void {
    this.loadeDevice();
  }

  loadeDevice() {
    this.http
      .get(this.shareService.serverPath + '/device/')
      .subscribe((res: any) => {
        this.devices = res.devicet;
        console.log(this.devices);
      });
  }

  savedevice() {
    if (this.device.id == null) {
      var path = this.shareService.serverPath + '/device/save';
    } else {
      var path = this.shareService.serverPath + '/device/update';
    }

    this.http.post(path, this.device).subscribe((res: any) => {
      this.devices = res.device;

      alert(res.message);
      this.loadeDevice();
      this.device = {
        id: null,
        name: null,
        remain: null,
      };
      // console.log(this.devices);
    });
  }

  editdevice(item: any) {
    this.device = item;
  }

  deldevice(item: any) {
    if (confirm('Are you sure Deletedevice ?')) {
      //console.log(device);
      var params = {
        id: item.id,
      };
      this.http
        .post(
          this.shareService.serverPath + '/device/delete/' + item.id,
          params
        )
        .subscribe((res: any) => {
          //console.log(res.message);
          alert(res.message);
          this.loadeDevice();
        });
    }
  }
}
