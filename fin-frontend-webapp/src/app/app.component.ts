import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(){
    console.log('constructor');
  }

  title = 'fin-frontend-webapp';

  ngOnInit(){
    console.log('ngOnInit');
  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked ');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit ');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked ');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy ');
  }
}
