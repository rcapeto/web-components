import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss'],
})
export class RouteComponent {
  title = '';
  navigate = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.data.subscribe((data: any) => {
      this.title = data?.title ?? '';
      this.navigate = data?.navigate ?? '';
    });
  }

  onClick() {
    this.router.navigate(['angular-router', this.navigate]);
  }

  onClickHome() {
    window.location.href = '';
  }
}
