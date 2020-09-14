import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.less']
})
export class EditModalComponent implements OnInit {

  @Input()
  data: object = {};

  @Input()
  isVisible = false;

  @Output()
  isVisibleChange = new EventEmitter();

  @Output()
  clickEvent = new EventEmitter();

  isEdit = false;
  validataForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.validataForm = this.fb.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required]],
      address: [null, [Validators.required]],
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.data['id']) {
      this.isEdit = true; 
      this.validataForm.setValue({
        name: this.data['name'],
        age: this.data['age'],
        address: this.data['address']
      });
    } else {
      this.isEdit = false;
      this.validataForm.setValue({
        name: '',
        age: '',
        address: ''
      });
    }
  }

  handleOk() {
    this.submitForm();
  }

  handleCancel() {
    this.isVisibleChange.emit(false);
  }

  submitForm(): void {
    let params = {};
    for (const i in this.validataForm.controls) {
      this.validataForm.controls[i].markAsDirty();
      this.validataForm.controls[i].updateValueAndValidity();
      if (!(this.validataForm.controls[i].status == 'VALID') && this.validataForm.controls[i].status !== 'DISABLED') {
        return;
      }

      if (this.validataForm.controls[i] && this.validataForm.controls[i].value) {
        params[i] = this.validataForm.controls[i].value;
      } else {
        params[i] = '';
      }
    }
    if (this.isEdit) {
      this.http.put('http://localhost:3000/users/' + this.data['id'], params).subscribe((res) => {
        this.clickEvent.emit();
      });
    } else {
      this.http.post('http://localhost:3000/users', params).subscribe(res => {
        this.clickEvent.emit();
      });
    }
    this.isVisibleChange.emit(false);
  }
}
