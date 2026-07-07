import { Component, Input, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class CardComponent {
  @Input() glowing: boolean = false;
  @Input() interactive: boolean = true;

  constructor(private el: ElementRef) {}

  onMouseMove(e: MouseEvent) {
    if (!this.interactive) return;
    const card = this.el.nativeElement.querySelector('.card-panel');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  }
}
