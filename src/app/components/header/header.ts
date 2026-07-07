import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  protected readonly isScrolled = signal(false);
  protected readonly isMobileMenuOpen = signal(false);
  protected readonly currentTheme = signal<'dark' | 'light'>('dark');

  constructor() {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
      const theme = savedTheme || 'dark';
      this.currentTheme.set(theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  toggleTheme() {
    const nextTheme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.currentTheme.set(nextTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', nextTheme);
      document.documentElement.setAttribute('data-theme', nextTheme);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.closeMobileMenu();
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
