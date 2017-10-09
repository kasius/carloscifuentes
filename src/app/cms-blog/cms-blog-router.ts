import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

// Components
import { CmsBlogComponent } from './cms-blog.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    component: CmsBlogComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        redirectTo: 'technologies',
      },
      {
        path: 'list',
        component: ListComponent,
        data: {
          title: 'list article'
        }
      },
      {
        path: 'create',
        component: CreateComponent,
        data: {
          title: 'create'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsBlogRoutes { }
