import { Component, HostListener, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title';
import { CardComponent } from '../../shared/card/card';

@Component({
  selector: 'app-approach',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, CardComponent],
  templateUrl: './approach.html',
  styleUrl: './approach.scss'
})
export class ApproachComponent implements OnInit {
  protected readonly currentIndex = signal(0);
  protected readonly visibleCount = signal(2);

  protected readonly pillars = [
    {
      title: 'Клиническая психология',
      role: 'Структура и безопасность',
      description: 'Фундаментальная научная база. Помогает провести дифференциальную диагностику, выстроить безопасные границы терапии, работать с клиническими запросами (депрессия, тревожность, травма) на доказательном уровне.',
      icon: 'brain-outline'
    },
    {
      title: 'Психодиетология',
      role: 'Контакт с телом и едой',
      description: 'Исследование взаимосвязи между эмоциями, нервной системой и питанием. Работа с расстройствами и нарушениями пищевого поведения, образом тела и психосоматическими проявлениями.',
      icon: 'restaurant-outline'
    },
    {
      title: 'Квантовый полевой подход',
      role: 'Глубинные паттерны сознания',
      description: 'Метод, позволяющий работать на информационном и энергетическом уровнях психики. Исследует бессознательные пласты и помогает трансформировать глубинные заблокированные состояния в обход ментальных защит.',
      icon: 'sparkles-outline'
    },
    {
      title: 'Системные расстановки',
      role: 'Семейные и системные динамики',
      description: 'Работа со скрытыми связями в семейных и родовых системах. Позволяет наглядно увидеть и распутать деструктивные переплетения, повторяющиеся сценарии и неосознанную лояльность роду.',
      icon: 'git-merge-outline'
    }
  ];

  ngOnInit() {
    this.updateVisibleCount();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateVisibleCount();
  }

  private updateVisibleCount() {
    if (typeof window !== 'undefined') {
      const count = window.innerWidth <= 768 ? 1 : 2;
      this.visibleCount.set(count);
      
      // Ensure index is within range after resize
      const maxIdx = this.pillars.length - count;
      if (this.currentIndex() > maxIdx) {
        this.currentIndex.set(maxIdx);
      }
    }
  }

  prevSlide() {
    if (this.currentIndex() > 0) {
      this.currentIndex.update(i => i - 1);
    }
  }

  nextSlide() {
    if (this.currentIndex() < this.pillars.length - this.visibleCount()) {
      this.currentIndex.update(i => i + 1);
    }
  }

  setSlide(index: number) {
    this.currentIndex.set(index);
  }

  getDotsArray() {
    const count = this.pillars.length - this.visibleCount() + 1;
    return new Array(count >= 0 ? count : 0);
  }
}
