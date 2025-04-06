import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type ShellEvent = { type: 'error'; payload?: any };
export type ListenCallback = (event: ShellEvent) => void;

@Injectable({ providedIn: 'root' })
export class EventManagerService {
  private eventSubject = new Subject<ShellEvent>();
  public events$ = this.eventSubject.asObservable();

  emit(event: ShellEvent) {
    this.eventSubject.next(event);
  }

  listen(cb: ListenCallback) {
    this.events$.subscribe((event) => {
      this.logEvent(event);

      cb(event);
    });
  }

  logEvent(event: ShellEvent) {
    console.groupCollapsed(
      '%c[EventManager] >> Received Event',
      'color: #FFF; background-color:#a855f7; padding: 2px;'
    );
    console.log('>> Type:', event.type);

    if (event.payload) {
      console.groupCollapsed('>> Payload:');

      Object.entries(event.payload ?? {}).map(([key, value]) => {
        console.log(key, value);
      });
      console.groupEnd();
    }

    console.groupEnd();
  }
}
