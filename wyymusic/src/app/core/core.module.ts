import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { PagesModule } from '../pages/pages.module';
import { ServicesModule } from '../services/services.module';
import { ShareModule } from '../share/share.module';
import zh from '@angular/common/locales/zh';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';

registerLocaleData(zh);


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PagesModule,
    ServicesModule,
    ShareModule,
    AppRoutingModule
  ],
  exports: [
    ShareModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class CoreModule {
  /**
   * 若不使用SkipSelf注解，则这里会本身一直陷入死循环。
   * SkipSelf 跳过当前本身Module
   * Optional 当查到不到参数时候给参数赋值为null
   */
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule 只能被AppModule引入');
    }
  }
}
