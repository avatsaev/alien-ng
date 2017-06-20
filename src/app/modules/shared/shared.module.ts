import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';
import {SharedService} from '../../services/shared.service';
import {CustomMaterialModule} from '../custom-material/custom-material.module';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  providers: [
    SharedService
  ],
  exports: [
    ToolbarComponent,
    CustomMaterialModule
  ]
})
export class SharedModule { }
