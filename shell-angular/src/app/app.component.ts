import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventManagerService } from './services/event-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private eventManager: EventManagerService,
    private router: Router
  ) {
    this.eventManager.events$.subscribe((event) => {
      if (event.type.includes('error')) {
        this.router.navigate(['/erro'], { state: event.payload });
      }
    });
  }
}
