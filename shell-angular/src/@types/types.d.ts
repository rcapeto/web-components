import { EventManagerService } from 'src/app/services/event-manager.service';

declare global {
  interface Window {
    shellEventManager: EventManagerService;
  }
}
