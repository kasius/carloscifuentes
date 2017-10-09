import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

// Components
import { TechnologiesComponent } from './technologies.component';

const routes: Routes = [
  {
    path: '',
    component: TechnologiesComponent,
    data: {
      title: 'Tecnologías'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologiesRoutes { }
