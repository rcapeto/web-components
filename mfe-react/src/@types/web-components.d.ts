import * as React from "react";
import { ButtonIcon } from "~/components/Button";

type WebComponent<Props = object> = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement> & Props,
  HTMLElement
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mfe-button": WebComponent<{
        text: string;
        classname?: string;
        icon?: ButtonIcon;
      }>;
      "mfe-router": WebComponent<{
        baseurl?: string;
      }>;
    }
  }
}
