import { createRoot } from "react-dom/client";
import css from "~/components/styles.css?inline";
import { defineWebComponent, WebComponentBase } from "~/utils";
import { PropSchema } from "~/utils/secondary";
import { Router } from "./Router";
import { RouterProps } from "./types";

class Component extends WebComponentBase<RouterProps> {
  shadow = this.attachShadow({ mode: "open" });

  css = css;
  attributesSchema?: PropSchema<RouterProps>[] = [
    {
      name: "baseurl",
      type: "string",
      required: false,
      defaultValue: "",
    },
  ];

  render() {
    const root = createRoot(this.shadow);
    const props = this.getProps();

    root.render(<Router {...props} />);
  }
}

defineWebComponent("mfe-router", Component);
