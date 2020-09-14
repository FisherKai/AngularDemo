import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'NGZORRO';
  clickEvent: string;

  modalIsVisible = false;

  radioValue = 'beijing';

  constructor(private router: Router) { }

  test(): void {
    this.modalIsVisible = true;
  }

  getClickEvent(eventName: string) {
    this.clickEvent = eventName;
  }

  routeToTestForm() {
    this.router.navigate(['/formtest']);
  }

  routeToTable() {
    this.router.navigate(['/table']);
  }
}
