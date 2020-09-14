import { BrowserModule, } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { ModalComponent } from './modal/modal.component';
import { BeijingComponent } from './beijing/beijing.component';
import { ShanghaiComponent } from './shanghai/shanghai.component';
import { GuangzhouComponent } from './guangzhou/guangzhou.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UtilsService } from './utils.service';
import { SendHttpComponent } from './send-http/send-http.component';
import { LoginComponent } from './login/login.component';
import { FormTestComponent } from './form-test/form-test.component';
import { TableComponent } from './table/table.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    BeijingComponent,
    ShanghaiComponent,
    GuangzhouComponent,
    UserInfoComponent,
    SendHttpComponent,
    LoginComponent,
    FormTestComponent,
    TableComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: NZ_I18N,
    useValue: zh_CN
  }, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
