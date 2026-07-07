import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title';
import { CardComponent } from '../../shared/card/card';

interface Diploma {
  title: string;
  institution: string;
  year: string;
  image: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, CardComponent],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class EducationComponent {
  protected readonly activeDiplomaImage = signal<string | null>(null);

  protected readonly diplomas: Diploma[] = [
    {
      title: 'Диплом о высшем клиническом образовании',
      institution: 'Московский Государственный Университет (МГУ)',
      year: '2016',
      image: '/images/diploma-clinical.png'
    },
    {
      title: 'Сертификат специалиста по психодиетологии',
      institution: 'Академия интегративной нутрициологии и диетотерапии',
      year: '2018',
      image: '/images/diploma-dietology.png'
    },
    {
      title: 'Диплом квантового полевого терапевта',
      institution: 'Международный Институт Квантовой Психологии',
      year: '2020',
      image: '/images/diploma-quantum.png'
    },
    {
      title: 'Диплом специалиста по системным расстановкам',
      institution: 'Центр системных семейных решений',
      year: '2021',
      image: '/images/diploma-constellations.png'
    }
  ];

  openLightbox(image: string) {
    this.activeDiplomaImage.set(image);
    // Prevent body scrolling when lightbox is active
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeLightbox() {
    this.activeDiplomaImage.set(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
