import { Injectable } from '@angular/core';
import { applicationConfig } from 'src/config/application';

type MountEventParams = {
  props?: Record<string, unknown>;
  isShadowDOM?: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class EventCommunicationService {
  private tag = applicationConfig.webComponentTag;

  emitError(payload?: any) {
    window.shellEventManager?.emit({ type: 'error', payload });
  }

  mountEvent(params?: MountEventParams) {
    const { isShadowDOM, props = true } = params ?? {};

    window.shellEventManager?.emit?.({
      type: 'mount',
      payload: {
        mfe: this.tag,
        props,
        isShadowDOM,
        stack: 'Angular',
      },
    });
  }

  unmountEvent() {
    window.shellEventManager?.emit?.({
      type: 'unmount',
      payload: {
        mfe: this.tag,
      },
    });
  }

  navigate(url: string) {
    window.shellEventManager?.emit?.({
      type: 'navigate',
      payload: {
        url,
      },
    });
  }
}
