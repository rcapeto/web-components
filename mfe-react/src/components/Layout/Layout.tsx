import { PropsWithChildren } from "react";
import { Header, HeaderNavItem } from "~/components/Header";

export function Layout(props: PropsWithChildren) {
  const { children } = props;

  const headerItems: HeaderNavItem[] = [
    { text: "Início", link: "/", isExternal: true },
    { text: "Sobre nós", link: "/sobre-nos" },
    { text: "Docs", link: "/documentacao" },
    { text: "Componentes", link: "/componentes", isExternal: true },
  ];

  return (
    <main className="bg-white flex flex-col gap-2 h-screen">
      <Header items={headerItems} />

      <section className="flex-1 flex flex-col gap-3 p-4">{children}</section>

      <footer className="flex items-center justify-center pt-3 border-t ">
        <p className="text-sm text-zinc-300">
          Feito por <span className="font-bold">Raphael Capeto</span>.
        </p>
      </footer>
    </main>
  );
}
