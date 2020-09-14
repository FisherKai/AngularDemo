import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  // 列表数据
  listData = [];

  editData = {};

  modalISVisible = false;

  // 对话框
  confirmModal: NzModalRef;

  constructor(private http: HttpClient, private modal: NzModalService) { }

  ngOnInit() {
    this.getListData();
  }

  getListData() {
    this.http.get('http://localhost:3000/users').subscribe((res: any) => {
      this.listData = res;
    });
  }

  addPeople() {
    this.editData = {};
    this.modalISVisible = true;
  }

  edit(item) {
    this.editData = item;
    this.modalISVisible = true;
  }

  delete(item) {
    this.confirmModal = this.modal.confirm({
      nzTitle: '提示',
      nzContent: '确认要删除吗?',
      nzOkText: '确认',
      nzCancelText: '取消',
      nzOnOk: () => {
        this.http.delete('http://localhost:3000/users/' + item.id).subscribe(() => {
          this.getListData();
        });
      }
    });
  }

  clickEvent(){
    this.getListData();
  }
}
