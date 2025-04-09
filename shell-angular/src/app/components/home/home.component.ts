import { Component } from '@angular/core';
import { EventManagerService } from 'src/app/services/event-manager.service';

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

  constructor(private eventManager: EventManagerService) {}

  redirectReactRouter() {
    this.eventManager.navigate('react-router/sobre-nos');
  }

  redirectAngularRouter() {
    this.eventManager.navigate('angular-router/sobre-nos');
  }
}
