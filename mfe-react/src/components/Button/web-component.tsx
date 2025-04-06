import { createWebComponent } from "~/utils";
import { Button } from "./Button";

createWebComponent({
  Component: Button,
  tag: "mfe-button",
  componentProps: ["className", "icon", "text"],
});
