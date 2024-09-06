import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
{path: '', component: HeaderComponent},
{path: 'home', component: HomeComponent},
{path: 'contact', component: ContactComponent},
{path: 'portfolio', component: PortfolioComponent},
{path: '**', component: HomeComponent, pathMatch: 'full'}
];
