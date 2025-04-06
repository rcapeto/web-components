import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { EventManagerService } from './app/services/event-manager.service';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    const injector = ref.injector;
    const eventManager = injector.get(EventManagerService);
    // expõe pros mfes para facilitar comunicação via eventos
    window.shellEventManager = eventManager;
  });
