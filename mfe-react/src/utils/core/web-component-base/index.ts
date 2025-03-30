import {
  GetComponentPropsParams,
  PropSchema,
  getComponentPropsByAttributes,
} from "~/utils/secondary";

export class WebComponentBase<
  Props extends object = object
> extends HTMLElement {
  public css?: string; //css `.red{background-color: red}`
  public styles?: string[]; // styles[mfe=teste]
  public shadow?: ShadowRoot;
  public attributesSchema?: PropSchema<Props>[];

  getStylesByTag(selectors: string[]) {
    return selectors.reduce(
      (nodes, tag) => [...nodes, ...Array.from(document.querySelectorAll(tag))],
      [] as Element[]
    );
  }

  getProps(): Props {
    const attributes: GetComponentPropsParams<Props>["attributes"] = [];

    for (const schema of this.attributesSchema ?? []) {
      const attributeName = schema.name as string;
      const value = this.getAttribute(attributeName);

      const defaultValue =
        schema.type === "string"
          ? schema.defaultValue
          : JSON.stringify(schema.defaultValue);

      attributes.push({
        value: value ?? defaultValue ?? "",
        schema,
      });
    }

    const props = getComponentPropsByAttributes<Props>({
      attributes,
    });

    return props;
  }

  attachShadowStyles(shadowRoot: ShadowRoot) {
    const sheets: CSSStyleSheet[] = [];
    const styles = this.getStylesByTag(this.styles ?? []);

    for (const style of styles) {
      const css = style.textContent;
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(`${css}`);
      sheets.push(sheet);
    }

    if (this.css) {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(`${this.css}`);
      sheets.push(sheet);
    }

    if (sheets.length) {
      shadowRoot.adoptedStyleSheets = sheets;
    }
  }

  connectedCallback() {
    if (this.shadow) {
      this.attachShadowStyles(this.shadow);
    }

    this.render();
  }

  render() {
    throw new Error("WebComponentBase: implemente o método render");
  }

  destroy() {}

  disconnectedCallback() {
    this.destroy();
  }

  attributeChangedCallback(
    name: keyof Props,
    oldValue: string,
    newValue: string
  ) {
    console.log(`Attribute ${name as string} has changed.`, {
      oldValue,
      newValue,
    });
  }

  static get observedAttributes() {
    // Lista de atributos
    return [""];
  }
}
