import { createRoot, Root } from "react-dom/client";
import { defineWebComponent, EventManager } from "~/utils";
import { CreateWebComponentConfig } from "./types";

export function createWebComponent<ComponentProps extends object = object>(
  config: CreateWebComponentConfig<ComponentProps>
) {
  const {
    Component,
    tag,
    styles = [],
    withShadowDOM = true,
    componentProps = [],
  } = config;

  class WebComponent extends HTMLElement {
    private shadow?: ShadowRoot = withShadowDOM
      ? this.attachShadow({ mode: "open" })
      : undefined;
    private root?: Root;

    getProps(): ComponentProps {
      return componentProps.reduce(
        (acc, prop) => ({
          ...acc,
          [prop]: this.getAttribute((prop as string).toLowerCase()),
        }),
        {}
      ) as ComponentProps;
    }

    attachShadowStyles(shadowRoot: ShadowRoot) {
      if (Array.isArray(styles)) {
        for (const css of styles) {
          const style = document.createElement("style");
          style.innerText = css;
          shadowRoot.appendChild(style);
        }
      } else {
        if (styles) {
          const style = document.createElement("style");
          style.innerText = styles;
          shadowRoot.appendChild(style);
        }
      }
    }

    connectedCallback() {
      if (this.shadow) {
        this.attachShadowStyles(this.shadow);
      }

      this.render();
    }

    render() {
      const container = this.shadow ?? this;
      const props = this.getProps();

      EventManager.emit({
        type: "mount",
        payload: {
          mfe: tag,
          props,
          isShadowDOM: Boolean(this.shadow),
          stack: "React",
        },
      });

      this.root = createRoot(container);
      this.root.render(<Component {...props} />);
    }

    destroy() {
      EventManager.emit({
        type: "unmount",
        payload: {
          mfe: tag,
        },
      });

      this.root?.unmount();
    }

    disconnectedCallback() {
      this.destroy();
    }
  }

  defineWebComponent(tag, WebComponent);
}
