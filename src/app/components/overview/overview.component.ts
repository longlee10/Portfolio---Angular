import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {
  link = {
    github: 'https://github.com/longlee10',
    linkedin: 'https://www.linkedin.com/in/hoanglongle/',
  };

  imgSrc = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    'https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png',
    'https://emanueleciriachi.net/wp-content/uploads/2019/01/logo-mongodb-png-mongodb-logo-png-400.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
    'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png',
    'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png',
    'https://raw.githubusercontent.com/ivangabriele/vscode-heroku/master/res/icon.png',
    'https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png',
    'https://www.thatjeffsmith.com/wp-content/uploads/2012/03/sqldev_512x512x32.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/7/78/XAMPP_logo.svg/1200px-XAMPP_logo.svg.png',
  ];

  openPage(event) {
    window.open(this.link[event.name]);
  }
}
