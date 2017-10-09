import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';


// Components
import { MyComponent } from './my.component';
import { WidgetContentBlogComponent } from '../shared/widget-content-blog/widget-content-blog.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        component: MyComponent,
        data: {
          title: 'Carlos Cifuentes'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRoutes { }
