import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  card = [
    {
      imgSrc: '/assets/img/Puzzle_store.png',
      name: 'Puzzle Store',
      href: 'https://puzzle-store-43bba.firebaseapp.com/',
      description:
        'In this project, I practice using Angular framework with Typescript, HTML, CSS (Bootstrap). Authentication and authorization features are implemented using Google Servive, and the website is hosted on Firebase.',
    },
    {
      imgSrc: '/assets/img/Aurora_research.png',
      name: 'Aurora Research Survey',
      href: 'https://aurora-research-company.herokuapp.com/landing',
      description:
        'Our team build this survey website with Angular, Bootstrap CSS and NodeJS. MongoDB is used to store data, and the site is hosted on Heroku.',
    },
  ];
}
