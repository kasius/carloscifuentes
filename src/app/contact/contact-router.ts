import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

// Components
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    data: {
      title: ''
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutes { }
