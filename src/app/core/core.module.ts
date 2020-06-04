import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FooterBottomComponent } from './footer/footer-bottom/footer-bottom.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, LoginComponent, FooterComponent, FooterBottomComponent,],
  imports: [CommonModule, CoreRoutingModule, RouterModule,  FormsModule, ReactiveFormsModule, HttpClientModule, SharedModule],
  exports: [HeaderComponent, NavbarComponent, FooterComponent]
})
export class CoreModule {}
