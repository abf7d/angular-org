import { Component } from '@angular/core';
import { HomeNewsletterComponent } from '../home-content/home-newsletter/home-newsletter.component';
import { HomeCallToActionComponent } from '../home-content/home-call-to-action/home-call-to-action.component';

@Component({
  selector: 'app-learn-more',
  standalone: true,
  imports: [HomeCallToActionComponent, HomeNewsletterComponent],
  templateUrl: './learn-more.component.html',
  styleUrl: './learn-more.component.scss'
})
export class LearnMoreComponent {

}
