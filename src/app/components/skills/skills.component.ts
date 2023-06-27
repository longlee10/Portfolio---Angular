import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  imgSrc: [];
  private url: string = '/assets/json/skills.json';

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get(this.url).subscribe((json) => {
      this.imgSrc = json['imgSrc'];
    });
  }
}
