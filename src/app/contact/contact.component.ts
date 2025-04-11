import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailJSResponseStatus, init, send } from '@emailjs/browser';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private readonly SERVICE_ID = 'service_basnu6f';
  private readonly TEMPLATE_ID = 'template_tzk6lc5';
  private readonly USER_ID = 'lDPsJXYtPrFLohV7A';

  constructor(private titleService: Title) {
    this.titleService.setTitle('Teddy Kibuthu - Contact');
    init(this.USER_ID);
  }

  sendEmail(form: NgForm) {
    if (form.valid) {
      const formData = form.value;

      send(this.SERVICE_ID, this.TEMPLATE_ID, {
        from_name: formData.fullName,
        to_name: 'Teddy Kibuthu',
        from_email: formData.email,
        to_email: 'teddykibuthu26@gmail.com',
        phone_number: formData.phoneNumber || 'N/A',
        subject: 'New Contact Form Submission',
        message: formData.message
      }).then((response: EmailJSResponseStatus) => {
        console.log('Email sent successfully:', response);
        this.showAlert('Your message has been sent successfully!', 'success');
        form.reset();
      }).catch((error) => {
        console.error('Error sending email:', error);
        this.showAlert('Failed to send your message. Please try again later.', 'error');
      });
    }
  }

  private showAlert(message: string, type: 'success' | 'error') {
    // You can implement a more sophisticated alert system here
    alert(message);
  }
}