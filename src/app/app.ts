import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { EducationComponent } from './components/education/education';
import { ApproachComponent } from './components/approach/approach';
import { ServicesComponent } from './components/services/services';
import { DiagnosticComponent } from './components/diagnostic/diagnostic';
import { StoriesComponent } from './components/stories/stories';
import { FaqComponent } from './components/faq/faq';
import { CertificateComponent } from './components/certificate/certificate';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    EducationComponent,
    ApproachComponent,
    ServicesComponent,
    DiagnosticComponent,
    StoriesComponent,
    FaqComponent,
    CertificateComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}

