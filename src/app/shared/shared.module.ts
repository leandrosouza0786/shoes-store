import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { InputComponent } from './input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShowcaseComponent } from './components/showcase/showcase.component';


@NgModule({
  declarations: [ShowcaseComponent, InputComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ShowcaseComponent, ReactiveFormsModule, FormsModule, InputComponent]
})
export class SharedModule {}
