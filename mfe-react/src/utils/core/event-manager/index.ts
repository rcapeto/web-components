import { Event } from "./types";

export class EventManager {
  static emit(event: Event, errorCallback?: CallableFunction) {
    if (window.shellEventManager) {
      window.shellEventManager?.emit?.(event);
    } else {
      errorCallback?.();
    }
  }

  static navigate(url: string, errorCallback?: CallableFunction) {
    if (window.shellEventManager) {
      window.shellEventManager?.navigate?.(url);
    } else {
      errorCallback?.();
    }
  }
}
