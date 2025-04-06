import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventCommunicationService } from 'src/app/services/event-communication.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss'],
})
export class RouteComponent {
  title = '';
  navigate = '';

  constructor(
    private eventCommunicationService: EventCommunicationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.data.subscribe((data: any) => {
      this.title = data?.title ?? '';
      this.navigate = data?.navigate ?? '';
    });
  }

  onClick() {
    this.router.navigate(['angular-router', this.navigate]);
  }

  onClickHome() {
    this.eventCommunicationService.navigate('');
  }

  handleRedirectToErrorPage() {
    this.eventCommunicationService.emitError();
  }
}
