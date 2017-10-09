import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// Module
import { SharedModule } from '../shared/shared.module';

// Component
import { BlogComponent } from './blog.component';

// Router
import { BlogRoutes } from './blog-router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BlogRoutes,
    HttpModule
  ],
  declarations: [BlogComponent, ListComponent, DetailComponent]
})
export class BlogModule { }
