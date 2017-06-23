import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThreadRoutingModule} from './thread-routing.module';
import {SharedModule} from '../../modules/shared/shared.module';
import {ThreadComponent} from './thread.component';

@NgModule({
  declarations: [
    ThreadComponent
  ],
  imports: [
    CommonModule,
    ThreadRoutingModule,
    SharedModule
  ],
  exports: []
})

export class ThreadModule {}
