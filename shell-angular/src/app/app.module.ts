import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReactRouterComponent } from './components/react-router/react-router.component';
import { AngularRouterComponent } from './components/angular-router/angular-router.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ReactRouterComponent, AngularRouterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
