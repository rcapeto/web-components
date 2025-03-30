import { GetComponentPropsParams, PropSchema, PropSchemaType } from "./types";

export function getComponentPropsByAttributes<Props extends object>(
  params: GetComponentPropsParams<Props>
) {
  const props = {} as Props;
  const { attributes } = params;

  for (const attribute of attributes) {
    if (attribute.value || attribute.schema.required) {
      const propKey = attribute.schema.name as keyof Props;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (props as any)[propKey] = getComponentPropValue<Props>(
        attribute.value,
        attribute.schema
      );
    }
  }

  return props;
}

function getComponentPropValue<Props>(
  value: string,
  schema: PropSchema<Props>
) {
  const transformers: Record<PropSchemaType, (value: string) => unknown> = {
    array: arrayParser,
    boolean: Boolean,
    number: Number,
    object: objectParser,
    string: String,
  };
  const transformer = transformers[schema.type] || String;

  if (schema.required) {
    return transformer(value) ?? schema.defaultValue;
  }

  return transformer(value);
}

function objectParser(objectStr: string) {
  try {
    return JSON.parse(objectStr);
  } catch (e) {
    console.log(e);
    return {};
  }
}

function arrayParser(objectStr: string) {
  try {
    const parser = JSON.parse(objectStr);

    return Array.isArray(parser) ? parser : [];
  } catch (e) {
    console.log(e);
    return [];
  }
}
