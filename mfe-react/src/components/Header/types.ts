export type HeaderProps = {
  items: Array<HeaderNavItem>;
};

export type HeaderNavItem = {
  text: string;
  link: string;
  isExternal?: boolean;
};
