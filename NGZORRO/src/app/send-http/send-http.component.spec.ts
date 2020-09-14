import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendHttpComponent } from './send-http.component';

describe('SendHttpComponent', () => {
  let component: SendHttpComponent;
  let fixture: ComponentFixture<SendHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
