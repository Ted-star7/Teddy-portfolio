import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Teddy Kibuthu- Contact')
  }

}
