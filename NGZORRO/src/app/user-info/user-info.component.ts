import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {

  phoneNumber: string;

  constructor(private util: UtilsService) { }

  ngOnInit() {
  }

  verifyPhoneNumber = () => {
    this.util.isMobilePhone(this.phoneNumber);
    if (this.util.isMobilePhone(this.phoneNumber)) {
      alert('正确的手机号');
    } else {
      alert('不正确的手机号');
    }
  }
}
