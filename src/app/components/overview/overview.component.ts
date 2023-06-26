import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {
  link = {};
  imgSrc: [];
  private url: string = '/assets/json/overview.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe((json) => {
      this.imgSrc = json['imgSrc'];
      this.link = json['link'];
    });
  }

  openPage(event: any) {
    window.open(this.link[event.name]);
  }
}
