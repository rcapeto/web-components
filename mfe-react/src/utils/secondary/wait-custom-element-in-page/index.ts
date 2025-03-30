export function waitCustomElementInPage(tagName: string, timeout = 10000) {
  return new Promise((resolve, reject) => {
    try {
      const timeoutInstance = setTimeout(() => {
        reject(`O WebComponent '${tagName}' não foi definido.`);
      }, timeout);

      customElements.whenDefined(tagName).then(() => {
        clearTimeout(timeoutInstance);
        resolve(true);
      });
    } catch (err) {
      reject(err);
    }
  });
}
