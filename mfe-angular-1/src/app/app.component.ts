import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @Input('title') title = 'Um título qualquer';
  @Input('description') description = 'Uma descrição qualquer';

  value = 0;

  increment() {
    this.value += 1;
    this.logValue();
  }

  decrement() {
    this.value -= 1;
    this.logValue();
  }

  ngOnInit() {
    console.log('Componente [Card]:Angular renderizado com sucesso', {
      props: {
        title: this.title,
        description: this.description,
      },
    });
  }

  logValue() {
    console.log('[MFE Card Angular] O valor do value é: ', this.value);
  }
}
