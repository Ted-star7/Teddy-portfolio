import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faBan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  // Font Awesome Icons
  faGithub = faGithub;
  faExternalLink = faExternalLinkAlt;
  faBan = faBan;

  constructor(private serviceTitle: Title) {
    this.serviceTitle.setTitle('Teddy Kibuthu - Portfolio');
  }

  projects = [
    {
      title: 'Smart Invest',
      description: 'A comprehensive investment platform with portfolio tracking, market analysis, and automated investment strategies.',
      image: 'assets/Smartinvest.png',
      github: 'https://github.com/Ted-star7/InvestmentWeb',
      demo: 'https://demo.com/project1',
      category: 'web',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      title: 'Architecture Website',
      description: 'Modern UI/UX design for an architecture firm featuring 3D model integration and virtual tours.',
      image: 'assets/Architecture.png',
      github: 'https://github.com/teddy/project2',
      demo: 'https://www.figma.com/proto/iBLJlrDX6D1p46sSA2iq6q/Architecture?node-id=2-153&node-type=canvas&t=2qL4i6q6OtavswH0-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
      category: 'ui',
      technologies: ['Figma', 'Three.js', 'GSAP']
    },
    {
      title: 'School Admin Portal',
      description: 'A School Portal to automate work with student management, attendance tracking, and grade reporting.',
      image: 'assets/School Portal.png',
      github: 'https://github.com/Ted-star7/School-portal',
      demo: 'https://heritageschoolleadership.vercel.app/',
      category: 'web',
      technologies: ['React', 'Firebase', 'Material UI']
    },
    {
      title: 'Token Resell',
      description: 'A secure and scalable token-based solutions platform with blockchain integration.',
      image: 'assets/Token.png',
      github: 'https://github.com/Ted-star7/Token-resell',
      demo: 'https://token-resell.vercel.app/',
      category: 'web',
      technologies: ['Next.js', 'Solidity', 'Web3.js']
    },
    {
      title: 'Inventory Management System',
      description: 'A comprehensive inventory system for managing products, stocks, and supply chain operations.',
      image: 'assets/Inventory.png',
      github: 'https://github.com/Ted-star7/Inventory-Management',
      demo: 'https://inventory-management-hazel-five.vercel.app/',
      category: 'web',
      technologies: ['Vue.js', 'Express', 'PostgreSQL']
    },
    {
      title: 'MindHaven - Mental Health',
      description: 'A mental health support platform providing resources, AI-driven chatbot, and journaling features.',
      image: 'assets/Mental-health.png',
      github: 'https://github.com/Ted-star7/MindHaven',
      demo: 'https://mind-haven-nine.vercel.app/',
      category: 'web',
      technologies: ['React', 'Node.js', 'TensorFlow.js']
    }
  ];

  activeFilter = 'all';

  filterProjects(category: string) {
    this.activeFilter = category;
  }

  get filteredProjects() {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }
}