export function loadScript(src: string): Promise<boolean> {
  const type = 'module';

  return new Promise((resolve, reject) => {
    if (typeof document === 'undefined') {
      reject('loadScript: document não está definido');
      return;
    }

    const hasScript = Array.from(document.getElementsByTagName('script')).find(
      (script) => script.src === src || script.src.startsWith(src)
    );

    if (hasScript) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');

    script.src = src;
    script.type = type;
    script.async = true;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      reject(`loadScript: ocorreu um erro ao carregar o script: ${src}`);
    };

    document.head.appendChild(script);
  });
}
