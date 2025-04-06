import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { EventCommunicationService } from './services/event-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @Input('title') title = 'Um título qualquer';
  @Input('description') description = 'Uma descrição qualquer';

  value = 0;

  constructor(private eventCommunication: EventCommunicationService) {}

  ngOnInit() {
    this.eventCommunication.mountEvent({
      props: {
        title: this.title,
        description: this.description,
      },
    });
  }

  increment() {
    this.value += 1;
    this.logValue();
  }

  decrement() {
    this.value -= 1;
    this.logValue();
  }

  logValue() {
    console.log('[MFE Card Angular] O valor do value é: ', this.value);
  }

  ngOnDestroy() {
    this.eventCommunication.unmountEvent();
  }
}
