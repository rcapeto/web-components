import { EventManager } from "~/utils";

export function navigateExternalApplication(url: string) {
  EventManager.emit(
    {
      type: "navigate",
      payload: {
        url,
      },
    },
    () => {
      window.location.replace(url);
    }
  );
}
