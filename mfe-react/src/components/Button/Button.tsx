import { ArrowLeft, ArrowRight } from "lucide-react";
import { FunctionComponent, useEffect, useState } from "react";
import css from "~/components/styles.css?inline";
import { EventManager } from "~/utils";
import { ButtonIcon, ButtonProps } from "./types";

export function Button(props: ButtonProps) {
  const [click, setClick] = useState(0);

  function handleButtonClick() {
    setClick((prev) => prev + 1);
  }

  function getCurrentIcon() {
    const icons: Record<
      ButtonIcon,
      FunctionComponent<{ className?: string }>
    > = {
      arrow_left: ArrowLeft,
      arrow_right: ArrowRight,
    };

    if (props.icon) {
      return icons[props.icon] ?? null;
    }

    return null;
  }

  const Icon = getCurrentIcon();

  useEffect(() => {
    if (click) {
      EventManager.emit({
        type: "buttonClick",
        payload: {
          mfe: "mfe-button",
          message: "Componente [Button]:React clicado com sucesso",
          numberOfTimes: click,
        },
      });
    }
  }, [click]);

  return (
    <>
      <style>{css}</style>

      <button
        className={`flex items-center gap-2 bg-purple-500 p-2 rounded text-white cursor-pointer hover:bg-purple-700 transition-colors shadow-lg ${
          props.className ?? ""
        }`}
        onClick={handleButtonClick}
      >
        {props.text}
        {Icon && <Icon className="size-4" />}
      </button>
    </>
  );
}
