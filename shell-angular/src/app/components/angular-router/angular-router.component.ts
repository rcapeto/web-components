import { Component } from '@angular/core';
import { loadScript } from 'src/utils/load-script';
import { waitDefineWebComponent } from 'src/utils/wait-define-web-component';

@Component({
  selector: 'app-angular-router',
  templateUrl: './angular-router.component.html',
  styleUrls: ['./angular-router.component.scss'],
})
export class AngularRouterComponent {
  loading = true;

  tag = 'angular-router';
  script = `http://localhost:8181/web-component.js?v=${Date.now()}`;

  async ngOnInit() {
    try {
      await this.loadReactComponent();
    } finally {
      this.loading = false;
    }
  }

  async loadReactComponent() {
    await this.loadComponent(this.script, this.tag);
  }

  async loadComponent(script: string, tag: string) {
    await loadScript(script);
    await waitDefineWebComponent(tag);
  }
}
