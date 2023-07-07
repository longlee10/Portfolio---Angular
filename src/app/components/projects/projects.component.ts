import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  card = [];
  link = {};
  url = '/assets/json/projects.json';
  constructor(private http: HttpClient) {}

  openPage(event) {
    window.open(this.link[event.getAttribute('name')]);
  }

  ngOnInit() {
    this.http.get(this.url).subscribe((json) => {
      this.card = json['card'];
      this.link = json['link'];
    });
  }
}
