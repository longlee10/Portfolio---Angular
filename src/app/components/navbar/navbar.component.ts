import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isActive: boolean;

  constructor(private router: Router) {}

  // async ngOnInit() {
  //   this.router.events
  //     .pipe(
  //       map((event) => {
  //         return event instanceof NavigationEnd ? event : null;
  //       })
  //     )
  //     .subscribe((e) => console.log(e?.url));
  // }

  // send() {}
}
