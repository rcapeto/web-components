export function defineWebComponent(
  tagName: string,
  component: CustomElementConstructor
) {
  if (customElements.get(tagName)) {
    return;
  }

  customElements.define(tagName, component);
}
