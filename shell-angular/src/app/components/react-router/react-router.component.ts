import { Component } from '@angular/core';
import { loadScript } from 'src/utils/load-script';
import { waitDefineWebComponent } from 'src/utils/wait-define-web-component';

@Component({
  selector: 'app-react-router',
  templateUrl: './react-router.component.html',
  styleUrls: ['./react-router.component.scss'],
})
export class ReactRouterComponent {
  loading = true;

  tags = {
    react: 'mfe-router',
  };

  scripts = {
    react: `http://localhost:5002/assets/${this.tags.react}.js`,
  };

  async ngOnInit() {
    try {
      await this.loadReactComponent();
    } finally {
      this.loading = false;
    }
  }

  async loadReactComponent() {
    const script = this.scripts.react;
    const tag = this.tags.react;

    await this.loadComponent(script, tag);
  }

  async loadComponent(script: string, tag: string) {
    await loadScript(script);
    await waitDefineWebComponent(tag);
  }
}
