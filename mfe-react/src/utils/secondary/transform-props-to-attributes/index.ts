export function transformPropsToAttributes(props: object) {
  return Object.entries(props)
    .map(([key, value]) => ({
      [key]:
        typeof value === "object" || Array.isArray(value)
          ? JSON.stringify(value)
          : value,
    }))
    .reduce(
      (acc, obj) => ({
        ...acc,
        ...obj,
      }),
      {}
    );
}
