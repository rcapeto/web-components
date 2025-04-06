declare global {
  interface Window {
    shellEventManager?: {
      emit: (event: { type: string; payload?: any }) => void;
    };
  }
}

export {};
