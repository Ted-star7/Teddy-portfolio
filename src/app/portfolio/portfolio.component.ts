import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faBan, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  // Font Awesome Icons
  faGithub = faGithub;
  faExternalLink = faExternalLinkAlt;
  faBan = faBan;
  faLock = faLock;

  constructor(private serviceTitle: Title) {
    this.serviceTitle.setTitle('Teddy Kibuthu - Portfolio');
  }

  projects = [
    {
      title: 'MindHaven',
      description: 'Mental health platform with resources and support features',
      image: 'assets/Mental-health.png',
      github: 'https://github.com/Ted-star7/MindHaven',
      demo: 'https://mind-haven-nine.vercel.app/',
      category: 'web',
      technologies: ['Angular', 'Springboot', 'Typescript', 'Java', 'Postgress']
    },
    {
      title: 'School Portal',
      description: 'School management system with student tracking and administrative features.',
      image: 'assets/School Portal.png',
      github: 'https://github.com/Ted-star7/School-portal',
      demo: 'https://heritageleadershipacademy.vercel.app/',
      category: 'web',
      technologies: ['TypeScript', 'Angular', 'Material UI','Springboot',  'Java', 'Postgress']
    },
    {
      title: 'Inventory Management',
      description: 'Comprehensive system for tracking and managing inventory.',
      image: 'assets/Inventory.png',
      github: 'https://github.com/Ted-star7/Inventory-Management',
      demo: 'https://inventory-management-hazel-five.vercel.app/',
      category: 'web',
      technologies: ['TypeScript', 'Angular', 'Springboot', 'Java']
    },
    {
      title: 'Token Resell Platform',
      description: 'Platform for token-based transactions and reselling.',
      image: 'assets/Token.png',
      github: 'https://github.com/Ted-star7/Token-resell',
      demo: 'https://token-resell.vercel.app/',
      category: 'web',
      technologies: ['HTML', 'JavaScript']
    },
    {
      title: 'Crowne Estates',
      description: 'Real estate platform for property management and listings.',
      image: 'assets/Crowne Estates.png',
      github: 'https://github.com/Ted-star7/Crowne-Estates',
      demo: 'https://www.crowneestates.co.ke/',
      category: 'web',
      technologies: ['Angular', 'Springboot', 'Typescript', 'Java', 'Postgress']
    },
    {
      title: 'Estate Admin',
      description: 'An administration system for property management.',
      image: 'assets/Estate Admin.png',
      github: 'https://github.com/Ted-star7',
      demo: null,
      category: 'web',
      technologies: ['Angular', 'Springboot', 'Typescript', 'Java', 'Postgress']
    },
    {
      title: 'Smart Invest',
      description: 'Investment platform with portfolio tracking and market analysis.',
      image: 'assets/Smartinvest.png',
      github: 'https://github.com/Ted-star7/Smart-Invest',
      demo: null,
      category: 'web',
      technologies: ['Angular', 'Springboot','Typescript', 'Java', 'Postgress']
    },
    {
      title: 'Haven Bot',
      description: 'A Python-based chatbot application designed to provide interactive experiences.',
      image: 'assets/P5.jpg',
      github: 'https://github.com/Ted-star7/Haven-bot',
      demo: null,
      category: '',
      technologies: ['Python', 'Chatbot', 'Webhook', 'Tensorflow']
    },
    {
      title: 'Mind Haven',
      description: 'A mental health support platform .',
      image: 'assets/P5.jpg',
      github: 'https://github.com/Ted-star7/Mind-Haven',
      demo: null,
      category: '',
      technologies: ['Angular', 'Springboot', 'Typescript', 'Java', 'Postgress']
    },
    {
      title: '3D Web Experience',
      description: 'Interactive 3D web application showcasing modern web capabilities.',
      image: 'assets/P5.jpg',
      github: 'https://github.com/Ted-star7/3D-Web',
      demo: null,
      category: 'web',
      technologies: ['HTML', 'Three.js', '3D']
    },
    {
      title: 'Password Strength Checker',
      description: 'Java application that evaluates and reports on password security strength.',
      image: 'assets/P5.jpg',
      github: 'https://github.com/Ted-star7/Password-Strength-Checker',
      demo: null,
      category: 'web',
      technologies: ['Java', 'Security']
    },
    {
      title: 'Basic Calculator App',
      description: 'Simple calculator application built with Java.',
      image: 'assets/P5.jpg',
      github: 'https://github.com/Ted-star7/Basic-Calculator-App',
      demo: null,
      category: 'web',
      technologies: ['Java']
    }
  ];

  activeFilter = 'all';

  filterProjects(category: string) {
    this.activeFilter = category;
  }

  showNoDemoMessage() {
    alert('Demo not available for this project.');
  }


  get filteredProjects() {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }
}