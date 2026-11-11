import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title';

interface TimelineItem {
  period: string;
  role: string;
  place: string;
  description?: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  protected readonly experience = [
    { year: '2015', text: 'Частная психологическая практика в Москве и Грозном' },
    { year: '15+', text: 'Лет работы в правовом отделе и международных программах ООН' },
    { year: '5', text: 'Специализаций (клиническая психология, психодиетология, расстановки, квантовый подход, гипноз)' },
    { year: '4', text: 'Страны международного образования и практики (Россия, Венгрия, Норвегия, США, Германия)' }
  ];

  protected readonly timeline: TimelineItem[] = [
    {
      period: '1996 — 2003',
      role: 'Преподаватель английского языка',
      place: 'Школы ЧР и Нефтяной институт',
      description: 'Первое фундаментальное лингвистическое образование.'
    },
    {
      period: '2003 — 2004',
      role: 'Координатор программ УВКБ ООН',
      place: 'НПО «Веста» (Чеченская Республика)',
      description: 'Координация социальных и гуманитарных программ ООН.'
    },
    {
      period: '2004 — 2018',
      role: 'Сотрудник правового отдела & менеджер БД УВКБ ООН',
      place: 'Владикавказ (2004–2011), Москва (2011–2018)',
      description: 'Параллельно с 2014 года — глубинная профпереподготовка по психологии.'
    },
    {
      period: 'С 2015 года',
      role: 'Частная психологическая практика',
      place: 'Москва',
      description: 'Консультации и приемы по выходным дням в Москве.'
    },
    {
      period: '2018 — 2020',
      role: 'Психолог, психолог-диетолог',
      place: 'Медцентр «АВИЦЕННА» (Грозный) / Институт Питания и Здоровья (Москва)',
      description: 'Совместный проект по коррекции пищевого поведения и психосоматике веса.'
    },
    {
      period: '2020 — 2026',
      role: 'Частная очная и онлайн-практика, автор тренингов и ретритов',
      place: 'Москва / Грозный & Онлайн',
      description: 'Автор денежных тренингов, курсов осознанного питания, расстановочных групп, ретритов и онлайн-клуба.'
    }
  ];
}
