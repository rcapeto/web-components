import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouteComponent } from './components/route/route.component';
import { RouteRoutingModule } from './route-routing.module';

@NgModule({
  declarations: [RouteComponent],
  imports: [CommonModule, RouteRoutingModule],
  exports: [RouteComponent],
})
export class RouteModule {}
