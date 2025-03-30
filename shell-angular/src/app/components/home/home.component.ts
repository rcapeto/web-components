import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loadScript } from 'src/utils/load-script';
import { waitDefineWebComponent } from 'src/utils/wait-define-web-component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  loading = true;

  tags = {
    react: 'mfe-button',
    angular: 'angular-card',
  };

  scripts = {
    react: `http://localhost:5002/assets/${this.tags.react}.js`,
    angular: `http://localhost:8080/web-component.js?v=${Date.now()}`,
  };

  constructor(private router: Router) {}

  async ngOnInit() {
    try {
      await this.loadReactComponent();
      await this.loadAngularComponent();
    } finally {
      this.loading = false;
    }
  }

  async loadReactComponent() {
    const script = this.scripts.react;
    const tag = this.tags.react;

    await this.loadComponent(script, tag);
  }

  async loadAngularComponent() {
    const script = this.scripts.angular;
    const tag = this.tags.angular;

    await this.loadComponent(script, tag);
  }

  async loadComponent(script: string, tag: string) {
    await loadScript(script);
    await waitDefineWebComponent(tag);
  }

  redirectReactRouter() {
    this.router.navigate(['react-router/sobre-nos']);
  }

  redirectAngularRouter() {
    this.router.navigate(['angular-router/sobre-nos']);
  }
}
