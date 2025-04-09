import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-router',
  templateUrl: './angular-router.component.html',
  styleUrls: ['./angular-router.component.scss'],
})
export class AngularRouterComponent {
  tag = 'angular-router';
  script = `http://localhost:8181/web-component.js?v=${Date.now()}`;
}
