import { NgModule } from '@angular/core';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

@NgModule({
    imports: [
        IndexComponent,
        IndexRoutingModule
    ]
})
export class IndexModule { }
