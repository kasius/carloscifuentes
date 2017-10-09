import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// Module
import { SharedModule } from '../shared/shared.module';

// Component
import { MyComponent } from './my.component';

// Router
import { MyRoutes } from './my-router.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    MyRoutes,
    SharedModule
  ],
  declarations: [MyComponent]
})
export class MyModule { }
