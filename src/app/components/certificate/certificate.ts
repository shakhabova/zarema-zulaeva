import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title';
import { ButtonComponent } from '../../shared/button/button';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ButtonComponent],
  templateUrl: './certificate.html',
  styleUrl: './certificate.scss'
})
export class CertificateComponent {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
