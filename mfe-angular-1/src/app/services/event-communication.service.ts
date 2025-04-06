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

  mountEvent(params: MountEventParams) {
    const { isShadowDOM = true, props } = params;

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
}
