import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutUs, Documentation } from "~/pages";
import { RouterProps } from "./types";

export function Router(props: RouterProps) {
  const { baseurl = "" } = props;

  const routes = [
    { path: "documentacao", element: <Documentation /> },
    { path: "sobre-nos", element: <AboutUs />, index: true },
  ];

  return (
    <BrowserRouter basename={baseurl}>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={`route-${index}`}
            path={route.path}
            element={route.element}
            index={route.index}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
