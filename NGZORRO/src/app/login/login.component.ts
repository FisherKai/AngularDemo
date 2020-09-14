import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  remember = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit = () => {
    alert(`账号${this.username}，密码${this.password}，记住密码${this.remember}`);
  }
}
