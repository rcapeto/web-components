import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { createCustomElement } from '@angular/elements';
import { applicationConfig } from 'src/config/application';
import { defineWebComponent } from 'src/utils/define-web-transformer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AppComponent],
  bootstrap: [], //Adicionar o AppComponent é necessário para o desenvolvimento em Localhost
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const webComponent = createCustomElement(AppComponent, {
      injector: this.injector,
    });

    defineWebComponent(applicationConfig.webComponentTag, webComponent);
  }
}
