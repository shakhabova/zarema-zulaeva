import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('bgVideo') videoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    this.setVideoSpeed();
  }

  // Helper to ensure playback rate is applied correctly on initial load
  setVideoSpeed() {
    if (this.videoRef && this.videoRef.nativeElement) {
      this.videoRef.nativeElement.playbackRate = 0.5;
    }
  }

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
