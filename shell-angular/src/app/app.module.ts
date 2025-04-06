import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularRouterComponent } from './components/angular-router/angular-router.component';
import { HomeComponent } from './components/home/home.component';
import { ReactRouterComponent } from './components/react-router/react-router.component';
import { RenderWebComponentComponent } from './components/render-web-component/render-web-component.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReactRouterComponent,
    AngularRouterComponent,
    RenderWebComponentComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
