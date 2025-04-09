type Event = {
  type: string;
  payload: Record<string, unknown>;
};

type NavigateParams = {
  queryParams?: Record<string, string>;
  state?: Record<string, unknown>;
};

declare global {
  interface Window {
    shellEventManager?: {
      emit: (event: { type: string; payload?: any }) => void;
      listen: (callback: (event: Event) => void) => void;
      navigate: (url: string, params?: NavigateParams) => void;
    };
  }
}

export {};
