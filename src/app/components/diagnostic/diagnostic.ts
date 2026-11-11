import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title';
import { ButtonComponent } from '../../shared/button/button';

interface DiagnosticCard {
  id: number;
  question: string;
  feedback: string;
  recommendation: string;
}

@Component({
  selector: 'app-diagnostic',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ButtonComponent],
  templateUrl: './diagnostic.html',
  styleUrl: './diagnostic.scss'
})
export class DiagnosticComponent {
  protected readonly selectedCardId = signal<number | null>(null);

  protected readonly diagnosticCards: DiagnosticCard[] = [
    {
      id: 1,
      question: '«Я чувствую, что застряла в повторяющемся сценарии»',
      feedback: 'Когда жизненные ситуации повторяются с завидным постоянством, корни проблемы часто лежат в семейных динамиках или родовой системе.',
      recommendation: 'В данном случае наиболее глубоко и наглядно сработают Системные расстановки, позволяющие увидеть скрытые лояльности и высвободить ресурс.'
    },
    {
      id: 2,
      question: '«Я теряю контакт с собой и своим телом»',
      feedback: 'Утрата контакта с телом часто является защитным механизмом от перегружающих эмоций, что нередко проявляется в пищевом поведении.',
      recommendation: 'Здесь отлично подойдет Психодиетология совместно с методами клинической психологии для бережного восстановления телесной осознанности.'
    },
    {
      id: 3,
      question: '«Мне сложно понять свои истинные желания»',
      feedback: 'Непонимание своих желаний говорит о наслоении чужих ожиданий, интроектов и внутренних конфликтов, блокирующих доступ к себе.',
      recommendation: 'Индивидуальные сессии и клинический подход помогут расчистить ментальный шум и выстроить личные ориентиры.'
    },
    {
      id: 4,
      question: '«Я хочу разобраться в отношениях с близкими»',
      feedback: 'Сложности в отношениях обычно отражают наши собственные внутренние дефициты или детско-родительские проекции, которые мы проецируем на партнера.',
      recommendation: 'Эффективна будет комбинация Индивидуальных консультаций и полевых расстановок для выявления скрытых сценариев взаимодействия.'
    },
    {
      id: 5,
      question: '«Я чувствую внутреннюю тяжесть без видимой причины»',
      feedback: 'Необъяснимая тяжесть, тревога или грусть часто являются «перенятыми» чувствами от кого-то из членов вашей семейной системы.',
      recommendation: 'Полевой подход и Квантовая психология помогут быстро обнаружить первопричину этой тяжести на уровне чувств и бережно её отпустить.'
    },
    {
      id: 6,
      question: '«Привычные способы справляться больше не работают»',
      feedback: 'Это состояние говорит о наступлении личного кризиса, который на самом деле является точкой перехода в новое качество жизни.',
      recommendation: 'Для вас идеальным выбором будет Долгосрочное сопровождение или Квантовая терапия для качественного внутреннего скачка.'
    }
  ];

  selectCard(cardId: number) {
    if (this.selectedCardId() === cardId) {
      this.selectedCardId.set(null); // Deselect on double click
    } else {
      this.selectedCardId.set(cardId);
    }
  }

  getSelectedCard() {
    return this.diagnosticCards.find(c => c.id === this.selectedCardId());
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
