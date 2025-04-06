import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { EventCommunicationService } from './services/event-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private eventCommunication: EventCommunicationService) {}

  ngOnInit() {
    this.eventCommunication.mountEvent();
  }

  ngOnDestroy() {
    this.eventCommunication.unmountEvent();
  }
}
