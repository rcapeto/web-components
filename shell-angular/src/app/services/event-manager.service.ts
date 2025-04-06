import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type ShellEvent = { type: 'error'; payload?: any };

@Injectable({ providedIn: 'root' })
export class EventManagerService {
  private eventSubject = new Subject<ShellEvent>();
  public events$ = this.eventSubject.asObservable();

  emit(event: ShellEvent) {
    this.eventSubject.next(event);
  }
}
