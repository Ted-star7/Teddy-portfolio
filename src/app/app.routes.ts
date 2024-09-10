import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Root path opens HomeComponent
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' } // Wildcard route
];
