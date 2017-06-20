import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule, MdIconModule, MdSidenavModule, MdToolbarModule} from '@angular/material';


const componentModules = [
  MdToolbarModule,
  MdButtonModule,
  MdSidenavModule,
  MdIconModule
];



@NgModule({
  imports: [
    CommonModule,
    ...componentModules
  ],
  exports: [
    ...componentModules
  ],
  declarations: []
})
export class CustomMaterialModule { }
