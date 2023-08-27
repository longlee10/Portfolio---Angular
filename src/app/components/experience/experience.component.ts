import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReadJsonServiceService } from 'src/app/services/read-json-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  viewportWidth: number = window.innerWidth;
  experience = [];
  private url: string = '/assets/json/experience.json';
  leftAlign: boolean;

  constructor(
    private http: HttpClient,
    private readJson: ReadJsonServiceService
  ) {}

  ngOnInit() {
    this.readJson.readJson(this.url).subscribe((json) => {
      this.experience = json['exp'];
    });
    console.log(this.viewportWidth);
  }
}
