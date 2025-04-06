import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventCommunicationService {

  emitError(payload?: any) {
    window.shellEventManager?.emit({ type: 'error', payload });
  }
}
