import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core'; 
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor(private titleService: Title, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    this.titleService.setTitle('Teddy Kibuthu - Home');
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  // Run after the view is initialized to trigger animations
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.animateProgressBars();
      this.addSlideInAnimation();
    }
  }

  // Function to animate progress bars from 0 to their percentage
  animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach((bar) => {
      const targetWidth = bar.getAttribute('data-target-width');
      if (targetWidth) {
        let currentWidth = 0;
        const targetWidthValue = parseInt(targetWidth, 10); // Convert to number
        const interval = setInterval(() => {
          if (currentWidth >= targetWidthValue) {
            clearInterval(interval);
          } else {
            currentWidth++;
            bar.setAttribute('style', `width: ${currentWidth}%`);
          }
        }, 20); // Adjust the speed here for smoother transitions
      }
    });
  }

  // Function to add slide-in animation to "What I Can Do" section
  addSlideInAnimation() {
    const skillsSection = document.querySelector('.what-i-can-do');
    if (skillsSection) {
      skillsSection.classList.add('slide-in-left');
    }
  }
 

  // setupTypingAnimation() {
  //   const typingElement = document.querySelector('.hero-title');
  //   if (typingElement) {
  //     const text = typingElement.textContent || '';
  //     typingElement.innerHTML = '';
  //     typingElement.classList.add('typing-animation');
  //     typingElement.style.width = '0';
  //     typingElement.style.display = 'inline-block';
  //     typingElement.style.whiteSpace = 'nowrap';

  //     setTimeout(() => {
  //       typingElement.style.width = '100%';
  //       typingElement.textContent = text;
  //     }, 100);
  //   }
  // }
}
