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
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class EducationComponent {
  protected readonly activeDiplomaImage = signal<string | null>(null);

  protected readonly diplomas: Diploma[] = [
    {
      title: 'Клинический психолог',
      institution: 'Московский Институт Психоанализа (МИП, Москва)',
      year: 'Диплом МИП',
      image: 'images/diploma-clinical.png'
    },
    {
      title: 'Психолог-диетолог',
      institution: 'Московский Институт Психоанализа (МИП, Москва)',
      year: 'Диплом МИП',
      image: 'images/diploma-dietology.png'
    },
    {
      title: 'Системный психотерапевт',
      institution: 'ИКСР (Москва) & Институт WISSLOCH (Вислох, Германия)',
      year: 'Сертификат',
      image: 'images/diploma-constellations.png'
    },
    {
      title: 'Квантовый психолог',
      institution: 'Центр Леонида Тальписа (Москва)',
      year: 'Диплом',
      image: 'images/diploma-quantum.png'
    },
    {
      title: 'Суггестолог, Гипнотерапевт',
      institution: 'Центр психоэнергетических исследований (Москва)',
      year: 'Сертификат',
      image: 'images/diploma-clinical.png'
    },
    {
      title: 'Лингвист & Юрист',
      institution: 'Обучение: Россия, Венгрия, Норвегия | Практика: США',
      year: '2 Диплома',
      image: 'images/diploma-dietology.png'
    }
  ];

  protected readonly additionalCourses: string[] = [
    'Краткосрочная психотерапия и экспресс-методы трансформации',
    'Работа с психологической травмой и исцелением',
    'Сексуальная психотерапия пар и семейное консультирование',
    'Энергетическое целительство (Рейки)',
    'Семинары и супервизионные практики по расстановочной работе'
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
