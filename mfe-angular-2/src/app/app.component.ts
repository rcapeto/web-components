import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('Componente [Router]:Angular renderizado com sucesso');
  }
}
