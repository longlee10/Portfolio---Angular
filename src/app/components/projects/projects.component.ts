import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  intro =
    'I have built multiple web applications using Angular, Bootstrap CSS, TypeScript and Javascript. You can find the source code on my Github. All projects are hosted on the cloud (Firebase or Heroku).';
  card = [
    {
      imgSrc: '/assets/img/Puzzle_store.png',
      title: 'Puzzle Store',
      name: 'puzzle',
      description:
        'In this project, I practice using Angular framework with Typescript, HTML, CSS (Bootstrap). Authentication and authorization features are implemented using Google Servive, and the website is hosted on Firebase.',
      tech: ['angular', 'typescript', 'firebase', 'bootstrap'],
    },
    {
      imgSrc: '/assets/img/Aurora_research.png',
      title: 'Aurora Research Survey',
      name: 'research',
      description:
        'Our team build this survey website with Angular, Bootstrap CSS and NodeJS. MongoDB is used to store data, and the site is hosted on Heroku.',
      tech: ['angular', 'nodejs', 'mongodb'],
    },
    {
      imgSrc: '/assets/img/Bug_smasher.png',
      title: 'Bug Smasher',
      name: 'bug',
      description:
        'This simple application is created with HTML, CSS and Javascript. Users catch the bugs to score, after each time the bug is caught, it moves faster.',
      tech: ['html', 'css', 'javascript'],
    },
  ];

  link = {
    puzzle: 'https://puzzle-store-43bba.firebaseapp.com/',
    research: 'https://aurora-research-company.herokuapp.com/landing',
    bug: 'http://studentweb.cencol.ca/hle81/BugSmasher/BugSmasher.html',
  };
  openPage(event) {
    window.open(this.link[event.name]);
  }
}
