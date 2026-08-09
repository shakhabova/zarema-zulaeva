import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title';
import { CardComponent } from '../../shared/card/card';
import { ButtonComponent } from '../../shared/button/button';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  format: string;
  highlight: boolean;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {
  protected readonly services: Service[] = [
    {
      id: 'clinical',
      title: 'Индивидуальная психотерапия & Гипнотерапия',
      subtitle: 'Клинический подход, гипноз, ДБТ',
      description: 'Глубокая психологическая работа с депрессивными состояниями, тревожностью, травмами и кризисами. Применение краткосрочной терапией, суггестивных методик и навыков ДБТ.',
      duration: '60 минут',
      format: 'Онлайн / Очно (Москва, Грозный)',
      highlight: false
    },
    {
      id: 'dietology',
      title: 'Психодиетология & Осознанное питание',
      subtitle: 'Психосоматика лишнего веса & Анти-эйдж',
      description: 'Авторский курс по осознанному питанию и тренинги по психосоматике веса (проект с Институтом Питания и Здоровья). Коррекция пищевого поведения и анти-эйдж подходы.',
      duration: '60 минут',
      format: 'Онлайн / Очно',
      highlight: false
    },
    {
      id: 'quantum',
      title: 'Квантовая психология & ВсеЛенская терапия',
      subtitle: 'Полевой метод Леонида Тальписа',
      description: 'Работа в квантовом полевом подходе для моментального выхода на первопричину деструктивных установок и быстрой трансформации жизненных сценариев на информационном уровне.',
      duration: '90 минут',
      format: 'Онлайн / Очно',
      highlight: true
    },
    {
      id: 'constellations',
      title: 'Системные & Клиент-центрированные расстановки',
      subtitle: 'Стандарты ИКСР & Вислох (Германия)',
      description: 'Исследование родовых динамик, семейных систем и глубинных переплетений. Проведение индивидуальных сессий и регулярных расстановочных групп.',
      duration: '90–120 минут',
      format: 'Группы / Индивидуально',
      highlight: false
    },
    {
      id: 'trainings',
      title: 'Денежные тренинги & Онлайн-клуб',
      subtitle: 'Авторские тренинги & Сообщество',
      description: 'Авторские программы по проработке финансовых блоков, регулярные терапевтические и расстановочные группы, а также закрытый онлайн-клуб поддержки.',
      duration: 'Модули & Клуб',
      format: 'Онлайн',
      highlight: false
    },
    {
      id: 'retreats',
      title: 'Выездные ретриты & Велнес-туры',
      subtitle: 'Перезагрузка в местах силы',
      description: 'Авторские выездные ретриты и велнес-программы. Глубокие практики, телесная терапия, восстановительные техники и наполнение ресурсом в кругу единомышленников.',
      duration: '3–7 дней',
      format: 'Выездные группы',
      highlight: false
    }
  ];

  onRowMouseMove(e: MouseEvent, rowEl: HTMLDivElement) {
    const rect = rowEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    rowEl.style.setProperty('--mouse-x', `${x}px`);
    rowEl.style.setProperty('--mouse-y', `${y}px`);
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
