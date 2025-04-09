import { Component } from '@angular/core';

@Component({
  selector: 'app-react-router',
  templateUrl: './react-router.component.html',
  styleUrls: ['./react-router.component.scss'],
})
export class ReactRouterComponent {
  tag = 'mfe-router';
  script = `http://localhost:5002/assets/${this.tag}.js`;
}
