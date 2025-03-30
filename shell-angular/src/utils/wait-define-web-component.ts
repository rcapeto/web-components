export function waitDefineWebComponent(webComponentTag: string) {
  return new Promise((resolve, reject) => {
    customElements
      .whenDefined(webComponentTag)
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        reject();
      });
  });
}
