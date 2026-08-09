import { Component, AfterViewInit, HostListener, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { EducationComponent } from './components/education/education';
import { ApproachComponent } from './components/approach/approach';
import { ServicesComponent } from './components/services/services';
import { DiagnosticComponent } from './components/diagnostic/diagnostic';
import { StoriesComponent } from './components/stories/stories';
import { FaqComponent } from './components/faq/faq';
import { CertificateComponent } from './components/certificate/certificate';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    EducationComponent,
    ApproachComponent,
    ServicesComponent,
    DiagnosticComponent,
    StoriesComponent,
    FaqComponent,
    CertificateComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  showScrollButton = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      this.showScrollButton.set(window.scrollY > 400);
    }
  }

  scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // Trigger only once
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
      });

      // Observe both reveal and reveal-stagger elements
      const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
      revealElements.forEach(el => observer.observe(el));
    }
  }
}

