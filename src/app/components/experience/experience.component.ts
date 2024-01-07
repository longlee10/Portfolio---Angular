import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReadJsonServiceService } from 'src/app/services/read-json-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  constructor(
    private http: HttpClient,
    private readJson: ReadJsonServiceService
  ) {}

  ngOnInit() {}
}
