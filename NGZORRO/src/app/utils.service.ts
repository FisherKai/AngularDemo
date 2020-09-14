import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  // 设置日期格式
  public formatDate(date: string) {
    const time = new Date(date);
    const dateTime = time.getFullYear() + '-' +
      this.formatDayAndMonth(time.getMonth() + 1) + '-' +
      this.formatDayAndMonth(time.getDate());
  }

  // 格式化日期和月份
  public formatDayAndMonth(val) {
    if (val < 10) {
      val = '0' + val;
    }
    return val;
  }

  // 手机号是否正确
  public isMobilePhone(val: string) {
    const reg: RegExp = /^1[3|4|5|8][0-9]\d{4,8}$/;
    return this.regVerify(val, reg);
  }

  // 验证邮箱是否正确
  public isEmail(val: string) {
    const reg: RegExp = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    return this.regVerify(val, reg);

  }

  // 正则表达式验证
  public regVerify(value: string, reg: RegExp) {
    if (reg.test(value)) {
      return true;
    } else {
      return false;
    }
  }
}
