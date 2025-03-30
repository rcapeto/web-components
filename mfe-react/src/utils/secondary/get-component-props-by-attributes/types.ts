export type PropSchemaType =
  | "string"
  | "boolean"
  | "number"
  | "array"
  | "object";

export type PropSchema<Props> =
  | StringSchema<Props>
  | RequiredStringSchema<Props>
  | NumberSchema<Props>
  | RequiredNumberSchema<Props>
  | BooleanSchema<Props>
  | RequiredBooleanSchema<Props>
  | ObjectSchema<Props>
  | RequiredObjectSchema<Props>
  | ArraySchema<Props>
  | RequiredArraySchema<Props>;

export type GetComponentPropsParams<Props = object> = {
  attributes: Array<{
    value: string;
    schema: PropSchema<Props>;
  }>;
};

type StringSchema<Props = object> = {
  type: "string";
  defaultValue?: string;
  required: false;
  name: keyof Props;
};

type RequiredStringSchema<Props = object> = {
  type: "string";
  defaultValue: string;
  required: true;
  name: keyof Props;
};

type NumberSchema<Props> = {
  type: "number";
  defaultValue?: number;
  required: false;
  name: keyof Props;
};

type RequiredNumberSchema<Props> = {
  type: "number";
  defaultValue: number;
  required: true;
  name: keyof Props;
};

type BooleanSchema<Props> = {
  type: "boolean";
  defaultValue?: boolean;
  required: false;
  name: keyof Props;
};

type RequiredBooleanSchema<Props> = {
  type: "boolean";
  defaultValue: boolean;
  required: true;
  name: keyof Props;
};

type ObjectSchema<Props> = {
  type: "object";
  defaultValue?: object;
  required?: false;
  name: keyof Props;
};

type RequiredObjectSchema<Props> = {
  type: "object";
  defaultValue?: object;
  required?: boolean;
  name: keyof Props;
};

type ArraySchema<Props> = {
  type: "array";
  defaultValue?: Array<unknown>;
  required: false;
  name: keyof Props;
};

type RequiredArraySchema<Props> = {
  type: "array";
  defaultValue: Array<unknown>;
  required: true;
  name: keyof Props;
};
