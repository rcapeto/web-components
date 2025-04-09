import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { loadScript } from 'src/utils/load-script';
import { waitDefineWebComponent } from 'src/utils/wait-define-web-component';

@Component({
  selector: 'app-render-web-component',
  templateUrl: './render-web-component.component.html',
  styleUrls: ['./render-web-component.component.scss'],
})
export class RenderWebComponentComponent implements OnInit {
  @Input() script = '';
  @Input() tag = '';
  @Input() errorMessage = '';
  @ViewChild('webComponentWrapper') wrapper!: ElementRef<HTMLDivElement>;
  @Input() attributes: Record<string, string> = {};

  isLoading = true;
  isError = false;

  async ngOnInit() {
    try {
      await loadScript(this.script);
      await waitDefineWebComponent(this.tag);
      await this.createWebComponent();
    } catch (err) {
      console.log('Error [RenderWebComponent]', {
        script: this.script,
        tag: this.tag,
      });
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }

  createWebComponent() {
    const webComponent = document.createElement(this.tag);

    for (const key in this.attributes) {
      webComponent.setAttribute(key, this.attributes[key]);
    }

    this.wrapper.nativeElement.appendChild(webComponent);
  }
}
