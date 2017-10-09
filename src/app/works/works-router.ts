import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

// Components
import { WorksComponent } from './works.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: WorksComponent,
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
          title: 'lista de trabajos'
        }
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
        data: {
          title: 'detalle trabajo'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutes { }
