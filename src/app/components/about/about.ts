import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  protected readonly experience = [
    { year: '10+', text: 'Лет непрерывной практической деятельности в области психотерапии' },
    { year: '4+', text: 'Профессиональных направления работы, интегрированных в единую систему' },
    { year: '1500+', text: 'Часов личной терапии и регулярной супервизии у ведущих мастеров' },
    { year: '5000+', text: 'Часов индивидуальной клинической и полевой работы с клиентами' }
  ];
}
