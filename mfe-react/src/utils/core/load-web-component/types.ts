import { FunctionComponent, ReactNode } from "react";
import { ScriptType } from "~/utils/secondary";

export type LoadWebComponentConfig = {
  tagName: string;
  timeout?: number;
  src: string;
  type?: ScriptType;
  loaderElement?: FunctionComponent<void>;
  errorElement?: (
    errorMessage: string,
    tagName: string
  ) => ReactNode | ReactNode;
  onLoaded?: () => void;
  onSuccess?: () => void;
  onError?: (errorMessage: string) => void;
};
