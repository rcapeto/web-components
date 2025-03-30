import { useNavigate } from "react-router";
import { navigateExternalApplication } from "~/utils";
import { HeaderNavItem, HeaderProps } from "./types";

export function Header(props: HeaderProps) {
  const { items } = props;
  const navigate = useNavigate();

  function handleClickItem(item: HeaderNavItem) {
    return () => {
      const isExternal = item.isExternal;
      const action = isExternal ? navigateExternalApplication : navigate;

      action(item.link);
    };
  }

  function isActiveLink(link: string) {
    const isHome = link === "/";

    if (isHome) {
      return link === window.location.pathname;
    }

    return window.location.pathname.includes(link);
  }

  return (
    <header className="shadow-md p-4 flex items-center justify-between gap-2">
      <span className="text-2xl text-bold">MicroAplicação</span>

      <nav>
        <ul className="flex items-center gap-3">
          {items.map((item, index) => (
            <a
              key={`item-href-${index}`}
              className={`${
                isActiveLink(item.link) ? "text-purple-500" : ""
              } cursor-pointer font-semibold`}
              onClick={handleClickItem(item)}
            >
              {item.text}
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
}
