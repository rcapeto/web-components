import { FunctionComponent } from "react";

export type CreateWebComponentConfig<ComponentProps> = {
  Component: FunctionComponent<ComponentProps>;
  tag: string;
  withShadowDOM?: boolean;
  styles?: string[] | string;
  componentProps?: Array<keyof ComponentProps>;
};
