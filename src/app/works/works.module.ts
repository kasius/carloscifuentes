import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// Module
import { SharedModule } from '../shared/shared.module';

// Router
import { WorksRoutes } from './works-router';

// Services
import { WorkService } from '../services/work.service';

// Components
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { WorksComponent } from './works.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    SharedModule,
    WorksRoutes
  ],
  providers: [WorkService],
  declarations: [ListComponent, DetailComponent, WorksComponent]
})
export class WorksModule { }
