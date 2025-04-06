declare global {
  interface Window {
    shellEventManager?: {
      emit: (event: {
        type: string;
        payload?: Record<string, unknown>;
      }) => void;
    };
  }
}

export {};
