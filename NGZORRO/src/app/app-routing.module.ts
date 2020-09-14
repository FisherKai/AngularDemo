import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormTestComponent } from './form-test/form-test.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'formtest',
  component: FormTestComponent
}, {
  path: 'table',
  component: TableComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
