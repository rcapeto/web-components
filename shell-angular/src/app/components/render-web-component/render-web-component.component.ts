import { Component, Input, OnInit } from '@angular/core';
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

  isLoading = true;
  isError = false;

  async ngOnInit() {
    try {
      await loadScript(this.script);
      await waitDefineWebComponent(this.tag);
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
}
