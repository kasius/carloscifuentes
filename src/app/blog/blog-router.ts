import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

// Components
import { BlogComponent } from './blog.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: ListComponent,
        data: {
          title: 'lista de artículos'
        }
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
        data: {
          title: 'detalle artículo'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutes { }
