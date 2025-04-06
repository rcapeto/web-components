export function transformPropsToAttributes<Props extends object = object>(
  props: Props
) {
  return Object.entries(props).reduce(
    (acc, [prop, value]) => ({
      ...acc,
      [prop.toLowerCase()]: value,
    }),
    {}
  );
}
