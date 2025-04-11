import { NgFor } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { NgbAccordionModule,  } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-resume',
    standalone: true,
    imports: [],
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private ServiceTitle: Title, private renderer: Renderer2) {
    this.ServiceTitle.setTitle('Teddy Kibuthu - Resume');
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank'); // Open in new tab
    link.setAttribute('href', '/assets/TeddyCv.docx');
    link.setAttribute('download', 'TeddyKibuthu_Resume.docx');
    this.renderer.appendChild(document.body, link);
    link.click();
    this.renderer.removeChild(document.body, link); 
  }
}
