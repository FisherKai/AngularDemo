import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  exports: [
    FormsModule,
    NgZorroAntdModule,
    CommonModule
  ]
})
export class ShareModule { }
