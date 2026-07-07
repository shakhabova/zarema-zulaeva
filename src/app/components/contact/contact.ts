import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionTitleComponent } from '../../shared/section-title/section-title';
import { ButtonComponent } from '../../shared/button/button';

interface ContactForm {
  name: string;
  contact: string;
  service: string;
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
    name: '',
    contact: '',
    service: 'individual',
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

  onSubmit(form: any) {
    if (form.valid) {
      // Simulate form submission to backend/email
      console.log('Form data submitted:', this.formData);
      this.isSubmitted.set(true);
      
      // Reset form fields
      form.resetForm({
        service: 'individual'
      });
    }
  }

  resetForm() {
    this.isSubmitted.set(false);
  }
}
