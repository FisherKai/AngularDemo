import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  @Input()
  title: string;  // 模态窗标题
  @Input()
  content: string;   // 模态窗内容
  @Input()
  okText: string;    // 确定按钮文本
  @Input()
  cancelText: string;    // 取消按钮文本
  @Input()
  isVisible = false;
  @Output()
  isVisibleChange = new EventEmitter();
  // @Output()
  // clickEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleOk(): void {
    console.log('handleOk');
    // this.clickEvent.emit('handleOk');
    this.isVisibleChange.emit(false);
  }

  handleCancel(): void {
    console.log('handleCancel');
    // this.clickEvent.emit('handleCancel');
    this.isVisibleChange.emit(false);
  }
}
