import css from "~/components/styles.css?inline";
import { createWebComponent } from "~/utils";
import { Router } from "./Router";

createWebComponent({
  Component: Router,
  tag: "mfe-router",
  componentProps: ["baseurl"],
  styles: css,
});
