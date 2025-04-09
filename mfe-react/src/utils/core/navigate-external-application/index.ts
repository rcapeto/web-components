import { EventManager } from "~/utils";

export function navigateExternalApplication(url: string) {
  EventManager.navigate(url, () => {
    window.location.replace(url);
  });
}
