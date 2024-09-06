import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  constructor(private serviceTitle: Title) {
    this.serviceTitle.setTitle('Teddy Kibuthu - Portfolio');
  }

  projects = [
    {
      title: 'Smart Invest',
      description: 'Created an investment Web App for investors ',
      image: 'assets/Smartinvest.png',
      github: 'https://github.com/teddy/project1',
      demo: 'https://demo.com/project1',
    },
    {
      title: 'Architecture Website',
      description: 'I developed a UI/UX Website.',
      image: 'assets/Architecture.png',
      github: 'https://github.com/teddy/project2',
      demo: 'https://demo.com/project2',
    },
    {
      title: 'School Admin Portal',
      description: 'A School Portal to automate work.',
      image: 'assets/School Portal.png',
      github: 'https://github.com/teddy/project2',
      demo: 'https://demo.com/project2',
    },
    {
      title: 'Project 4',
      description: 'A description of project 2.',
      image: 'assets/P4.jpg',
      github: 'https://github.com/teddy/project2',
      demo: 'https://demo.com/project2',
    },
    {
      title: 'Project 5',
      description: 'A description of project 2.',
      image: 'assets/P5.jpg',
      github: 'https://github.com/teddy/project2',
      demo: 'https://demo.com/project2',
    },
    {
      title: 'Project 6',
      description: 'A description of project 2.',
      image: 'assets/P6.jpg',
      github: 'https://github.com/teddy/project2',
      demo: 'https://demo.com/project2',
    },
    
  ];
}
