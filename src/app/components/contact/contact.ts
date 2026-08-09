import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionTitleComponent } from '../../shared/section-title/section-title';
import { ButtonComponent } from '../../shared/button/button';

interface ContactForm {
  service: string;
  format: string;
  preferredTime: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionTitleComponent, ButtonComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  protected readonly formData: ContactForm = {
    service: 'individual',
    format: 'online',
    preferredTime: 'any',
    message: ''
  };

  protected readonly isSubmitted = signal(false);

  protected readonly services = [
    { value: 'individual', label: 'Индивидуальная консультация' },
    { value: 'dietology', label: 'Психодиетология' },
    { value: 'quantum', label: 'Сессия квантовой психологии' },
    { value: 'constellations', label: 'Системная расстановка' },
    { value: 'support', label: 'Долгосрочное сопровождение' },
    { value: 'certificate', label: 'Подарочный сертификат' }
  ];

  protected readonly formats = [
    { value: 'online', label: 'Онлайн (Zoom / Skype / Telegram)' },
    { value: 'offline', label: 'Очно в Москве (кабинет в центре)' }
  ];

  protected readonly times = [
    { value: 'any', label: 'В любое время' },
    { value: 'morning', label: 'Утро (с 9:00 до 12:00)' },
    { value: 'afternoon', label: 'День (с 12:00 до 18:00)' },
    { value: 'evening', label: 'Вечер (с 18:00 до 21:00)' }
  ];

  onSubmit(form: any) {
    if (form.valid) {
      // Find readable labels for the message
      const serviceLabel = this.services.find(s => s.value === this.formData.service)?.label || this.formData.service;
      const formatLabel = this.formats.find(f => f.value === this.formData.format)?.label || this.formData.format;
      const timeLabel = this.times.find(t => t.value === this.formData.preferredTime)?.label || this.formData.preferredTime;
      
      const messageText = this.formData.message ? `\nЗапрос: ${this.formData.message}` : '';

      // Format clean message for WhatsApp
      const text = `Здравствуйте, Зарема! Хочу записаться на сессию.\n\nНаправление: ${serviceLabel}\nФормат встреч: ${formatLabel}\nУдобное время: ${timeLabel}${messageText}`;
      
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/79990000000?text=${encodedText}`;

      if (typeof window !== 'undefined') {
        window.open(whatsappUrl, '_blank');
      }

      this.isSubmitted.set(true);
      
      // Reset form fields
      form.resetForm({
        service: 'individual',
        format: 'online',
        preferredTime: 'any',
        message: ''
      });
    }
  }

  resetForm() {
    this.isSubmitted.set(false);
  }
}
