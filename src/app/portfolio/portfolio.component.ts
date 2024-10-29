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
      github: 'https://github.com/Ted-star7/InvestmentWeb',
      demo: 'https://demo.com/project1',
    },
    {
      title: 'Architecture Website',
      description: 'I developed a UI/UX Website.',
      image: 'assets/Architecture.png',
      github: 'https://github.com/teddy/project2',
      demo: 'https://www.figma.com/proto/iBLJlrDX6D1p46sSA2iq6k/Architecture?node-id=2-153&node-type=canvas&t=2qL4i6q6OtavswH0-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    },
    {
      title: 'School Admin Portal',
      description: 'A School Portal to automate work.',
      image: 'assets/School Portal.png',
      github: 'https://github.com/Ted-star7/School-portal',
      demo: 'https://heritageschoolleadership.vercel.app/',
    },
    {
      title:'Token Resell',
      description: 'A secure and scalable token-based solutions.',
      image: 'assets/Token.png',
      github: 'https://github.com/Ted-star7/Token-resell',
      demo: 'https://token-resell.vercel.app/',
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
