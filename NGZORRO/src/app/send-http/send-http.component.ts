import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-send-http',
  templateUrl: './send-http.component.html',
  styleUrls: ['./send-http.component.less']
})
export class SendHttpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.http.post('', {}).subscribe(res => {
      console.log(res);
    })
  }

}
