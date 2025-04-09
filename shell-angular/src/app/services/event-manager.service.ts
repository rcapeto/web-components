import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type ShellEvent = { type: 'error' | 'navigate'; payload?: any };
export type ListenCallback = (event: ShellEvent) => void;

type NavigateParams = {
  queryParams?: Record<string, string>;
  state?: Record<string, unknown>;
};

@Injectable({ providedIn: 'root' })
export class EventManagerService {
  private eventSubject = new Subject<ShellEvent>();
  public events$ = this.eventSubject.asObservable();

  emit(event: ShellEvent) {
    this.eventSubject.next(event);
  }

  listen(cb: ListenCallback, showLog = false) {
    this.events$.subscribe((event) => {
      if (showLog) {
        this.logEvent(event);
      }

      cb(event);
    });
  }

  logEvent(event: ShellEvent) {
    console.groupCollapsed(
      `%c[EventManager] ${event.type} event`,
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

  navigate(url: string, params?: NavigateParams) {
    this.emit({
      type: 'navigate',
      payload: {
        url,
        ...(params ?? {}),
      },
    });
  }
}
