import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-item.html',
  styleUrl: './faq-item.scss'
})
export class FaqItemComponent {
  @Input({ required: true }) question: string = '';
  @Input({ required: true }) answer: string = '';

  protected readonly isOpen = signal(false);

  toggleOpen() {
    this.isOpen.update(value => !value);
  }
}
