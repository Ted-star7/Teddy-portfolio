import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm, FormsModule } from '@angular/forms';
import { EmailJSResponseStatus, init, send } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule], // Import FormsModule for ngForm
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private readonly SERVICE_ID = 'service_basnu6f';
  private readonly TEMPLATE_ID = 'template_tzk6lc5';
  private readonly USER_ID = 'lDPsJXYtPrFLohV7A'; // Replace with your EmailJS User ID

  constructor(private titleService: Title){
    this.titleService.setTitle('Teddy Kibuthu- Contact');
    init(this.USER_ID); // Initialize EmailJS
  }

  sendEmail(form: NgForm) {
    if (form.valid) {
      const formData = form.value;

      send(this.SERVICE_ID, this.TEMPLATE_ID, {
        from_name: formData.fullName,
        to_name: 'Teddy Kibuthu',
        from_email: formData.email,
        to_email: 'teddykibuthu26@gmail.com', // Replace with your email
        phone_number: formData.phoneNumber || 'N/A',
        subject: 'Get in touch',
        message: formData.message
      }).then((response: EmailJSResponseStatus) => {
        console.log('Email sent successfully:', response);
        alert('Your message has been sent successfully!');
        form.reset();
      }).catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send your message. Please try again later.');
      });
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
