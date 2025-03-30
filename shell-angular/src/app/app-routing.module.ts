import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularRouterComponent } from './components/angular-router/angular-router.component';
import { HomeComponent } from './components/home/home.component';
import { ReactRouterComponent } from './components/react-router/react-router.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'react-router',
    children: [
      {
        path: '**',
        component: ReactRouterComponent,
      },
    ],
  },
  {
    path: 'angular-router',
    children: [
      {
        path: '**',
        component: AngularRouterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
