import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';
import {SharedService} from '../../services/shared.service';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {MockService} from '../../services/mock.service';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    StoreModule.provideStore({}, {})
  ],
  providers: [
    SharedService,
    MockService
  ],
  exports: [
    ToolbarComponent,
    CustomMaterialModule,
    StoreModule
  ]
})
export class SharedModule { }
