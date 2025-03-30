import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteComponent } from './components/route/route.component';

const routes: Routes = [
  {
    path: 'sobre-nos',
    component: RouteComponent,
    data: {
      title: 'Sobre nos',
      navigate: 'documentacao',
    },
  },
  {
    path: 'documentacao',
    component: RouteComponent,
    data: {
      title: 'Documentação',
      navigate: 'sobre-nos',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
