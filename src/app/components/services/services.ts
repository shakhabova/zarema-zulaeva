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
      id: 'individual',
      title: 'Индивидуальная консультация',
      subtitle: 'Классический клинический подход',
      description: 'Глубокая психологическая работа с депрессивными состояниями, тревожностью, кризисами самоопределения и психологическими травмами. Создаем прочный фундамент и личные границы.',
      duration: '50 минут',
      format: 'Онлайн / Очно',
      highlight: false
    },
    {
      id: 'dietology',
      title: 'Психодиетология',
      subtitle: 'Связь тела, эмоций и питания',
      description: 'Коррекция нарушений пищевого поведения, работа с перееданием, непринятием тела и психосоматическими зажимами. Возвращаем чувствительность к сигналам организма.',
      duration: '60 минут',
      format: 'Онлайн',
      highlight: false
    },
    {
      id: 'quantum',
      title: 'Сессия квантовой психологии',
      subtitle: 'Трансформация бессознательного',
      description: 'Работа в квантовом полевом подходе для быстрого выявления скрытых блоков и изменения негативных установок на информационном уровне психики. Подходит для глубоких затяжных запросов.',
      duration: '90 минут',
      format: 'Онлайн / Очно',
      highlight: true
    },
    {
      id: 'constellations',
      title: 'Системные расстановки',
      subtitle: 'Исследование семейных динамик',
      description: 'Выявление бессознательных связей, родовых переплетений, лояльности семейной системе и повторяющихся сценариев. Возвращаем вам ваше собственное место в жизни.',
      duration: '120 минут',
      format: 'Онлайн / Очно',
      highlight: false
    },
    {
      id: 'support',
      title: 'Долгосрочное сопровождение',
      subtitle: 'Комплексная трансформация',
      description: 'Индивидуальная программа, сочетающая клиническую психотерапию, психодиетологию и полевую работу. Регулярная поддержка на пути масштабных изменений жизни.',
      duration: 'от 3 месяцев',
      format: 'Онлайн',
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
