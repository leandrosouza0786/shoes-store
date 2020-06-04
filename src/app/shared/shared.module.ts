import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ShowcaseComponent } from './components/showcase/showcase.component';


@NgModule({
  declarations: [ShowcaseComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [ShowcaseComponent]
})
export class SharedModule { }
