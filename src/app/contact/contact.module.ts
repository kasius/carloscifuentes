import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// Module
import { SharedModule } from '../shared/shared.module';

// Router
import { ContactRoutes } from './contact-router';

// Components
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    SharedModule,
    ContactRoutes
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
