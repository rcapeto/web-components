import { createElement, FunctionComponent, useEffect, useState } from "react";
import {
  loadScript,
  transformPropsToAttributes,
  waitCustomElementInPage,
} from "~/utils/secondary";
import { LoadWebComponentConfig } from "./types";

export function loadWebComponent<ComponentProps extends object>({
  src,
  tagName,
  loaderElement,
  errorElement,
  onError,
  onSuccess,
  onLoaded,
  timeout,
  type,
}: LoadWebComponentConfig) {
  function ReactComponent(props: ComponentProps) {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function loadAsync() {
      try {
        setLoading(true);

        await loadScript(src, type);
        await waitCustomElementInPage(tagName, timeout);

        onSuccess?.();
      } catch (err) {
        const message =
          (err as Error)?.message ||
          `loadWebComponent: Erro ao carregar o webComponent "${tagName}", verifique os logs.`;

        console.error(`loadWebComponent error: [${tagName}]`, err);

        setErrorMessage(message);
        onError?.(message);
      } finally {
        setLoading(false);
        onLoaded?.();
      }
    }

    useEffect(() => {
      loadAsync();
    }, []);

    if (loading) {
      return loaderElement?.() || null;
    }

    if (errorMessage) {
      if (typeof errorElement === "function") {
        return errorElement(errorMessage, tagName);
      }

      return errorElement || null;
    }

    const newProps = transformPropsToAttributes(props);

    return createElement(tagName, {
      ...newProps,
    });
  }

  return ReactComponent as FunctionComponent<ComponentProps>;
}
