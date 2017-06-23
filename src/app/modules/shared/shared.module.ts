import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';
import {SharedService} from '../../services/shared.service';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {MockService} from '../../services/mock.service';
import {ThreadListComponent} from '../../components/thread-list/thread-list.component';
import {RouterModule} from '@angular/router';
import {ThreadDetailsComponent} from "../../components/thread-details/thread-details.component";

@NgModule({
  declarations: [
    ToolbarComponent,
    ThreadListComponent,
    ThreadDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  providers: [
    SharedService,
    MockService
  ],
  exports: [
    ToolbarComponent,
    CustomMaterialModule,
    ThreadListComponent,
    ThreadDetailsComponent
  ]
})
export class SharedModule { }
