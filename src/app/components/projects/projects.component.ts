import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  card = [];
  url = '/assets/json/projects.json';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe((json) => {
      this.card = json['card'];
    });
  }
}
