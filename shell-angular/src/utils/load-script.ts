export function loadScript(src: string) {
  const type = 'module';

  return new Promise((resolve, reject) => {
    if (typeof document === 'undefined') {
      reject('loadScript: document não está definido');
      return;
    }

    const hasScript = document.querySelector(`script[src^="${src}"]`);

    if (hasScript) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');

    script.src = src;
    script.type = type;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      reject(`loadScript: ocorreu um erro ao carregar o script: ${src}`);
    };

    console.log('script >>', script);

    document.head.appendChild(script);
  });
}
