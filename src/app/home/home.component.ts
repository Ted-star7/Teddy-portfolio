import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle('Teddy Kibuthu- Home');
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
