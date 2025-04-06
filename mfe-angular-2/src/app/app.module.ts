import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { createCustomElement } from '@angular/elements';
import { Router } from '@angular/router';
import { applicationConfig } from 'src/config/application';
import { defineWebComponent } from 'src/utils/define-web-transformer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteModule } from './modules/route/route.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RouteModule],
  exports: [],
  providers: [AppComponent],
  bootstrap: [], //Adicionar o AppComponent é necessário para o desenvolvimento em Localhost
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector, private router: Router) {}

  ngDoBootstrap(): void {
    const webComponent = createCustomElement(AppComponent, {
      injector: this.injector,
    });

    defineWebComponent(applicationConfig.webComponentTag, webComponent);

    this.router.initialNavigation();
  }
}
