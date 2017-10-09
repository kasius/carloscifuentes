import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// Module
import { SharedModule } from '../shared/shared.module';

// Components
import { TechnologiesComponent } from './technologies.component';

// Router
import { TechnologiesRoutes } from './technologies-router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    TechnologiesRoutes,
    SharedModule
  ],
  declarations: [TechnologiesComponent]
})
export class TechnologiesModule { }
