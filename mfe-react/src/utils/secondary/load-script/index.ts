import { ScriptType } from "./types";

export async function loadScript(
  src: string,
  type: ScriptType = "text/javascript"
) {
  return new Promise((resolve, reject) => {
    if (typeof document === "undefined") {
      reject("loadScript: document não está definido");
      return null;
    }

    const hasScript = document.querySelector(`script[src^="${src}"]`);

    if (hasScript) {
      resolve(true);
      return null;
    }

    const script = document.createElement("script");

    script.src = src;
    script.type = type;
    script.async = true;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      reject(`loadScript: ocorreu um erro ao carregar o script: ${src}`);
    };

    document.body.appendChild(script);
  });
}
