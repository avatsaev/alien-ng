import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';
import {SharedService} from '../../services/shared.service';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {MockService} from '../../services/mock.service';
import {ThreadListComponent} from '../../components/thread-list/thread-list.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    ThreadListComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,

  ],
  providers: [
    SharedService,
    MockService
  ],
  exports: [
    ToolbarComponent,
    CustomMaterialModule,
    ThreadListComponent
  ]
})
export class SharedModule { }
