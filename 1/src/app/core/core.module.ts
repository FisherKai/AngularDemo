import { NgModule, SkipSelf,Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //动画
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from '../pages/pages.module';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PagesModule,
    ServicesModule
  ]
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
