import { Event } from "./types";

export class EventManager {
  static emit(event: Event, errorCallback?: CallableFunction) {
    if (window.shellEventManager) {
      window.shellEventManager?.emit?.(event);
    } else {
      errorCallback?.();
    }
  }
}
