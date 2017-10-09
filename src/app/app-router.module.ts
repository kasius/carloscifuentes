import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AppComponent,
    data: {
      title: 'Carlos Cifuentes'
    },
    children: [
      {
        path: '',
        redirectTo: 'carlos-cifuentes',
        pathMatch: 'full'
      },
      {
        path: 'carlos-cifuentes',
        loadChildren: './my/my.module#MyModule'
      },
      {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule'
      },
      {
        path: 'cms-blog',
        loadChildren: './cms-blog/cms-blog.module#CmsBlogModule'
      },
      {
        path: 'technologies',
        loadChildren: './technologies/technologies.module#TechnologiesModule'
      },
      {
        path: 'works',
        loadChildren: './works/works.module#WorksModule'
      },
      {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
