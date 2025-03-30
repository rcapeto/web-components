import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  tags = {
    react: 'mfe-button',
    angular: 'angular-card',
  };

  scripts = {
    react: `http://localhost:5002/assets/${this.tags.react}.js?v=${Date.now()}`,
    angular: `http://localhost:8080/web-component.js?v=${Date.now()}`,
  };

  constructor(private router: Router) {}

  redirectReactRouter() {
    this.router.navigate(['react-router/sobre-nos']);
  }

  redirectAngularRouter() {
    this.router.navigate(['angular-router/sobre-nos']);
  }
}
