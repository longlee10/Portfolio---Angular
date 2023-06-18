import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experience = [
    {
      time: 'Jan 2022 - Dec 2024',
      name: 'Software Engineering Technology Student',
      place: 'Centennial College',
      desc: [
        'Web Application Development',
        'Data Structures & Algorithms',
        'Java Programming',
        'Database Concepts',
      ],
    },
    {
      time: 'Jan 2023 - April 2023',
      name: 'Media Developer',
      place: 'Pearson Canada',
      desc: [
        'Developing and debugging Pearson online EPUB textbooks with HTML5, CSS3 and JavaScript',
        'Creating test cases and involving in manual testing activities on Pearson online websites and platforms',
        'Applying WCAG 2.0 in front-end development to meet accessibility standards',
        'Working independently or collaboratively with senior web developer and fellow co-op students',
      ],
    },
    {
      time: 'May 2023',
      name: 'Blue Salt Media Hackathon',
      place: 'Blue Salt Digital Media',
      desc: [
        'Designing UI for mobile and web applications for restaurants to manage their ads using Figma',
        'Focusing on the design of simple applications suitable for non-technical users.',
      ],
    },
  ];
}
