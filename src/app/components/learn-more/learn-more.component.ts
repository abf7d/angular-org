import { Component, ElementRef, ViewChild } from '@angular/core';
import { HomeNewsletterComponent } from '../home-content/home-newsletter/home-newsletter.component';
import { HomeCallToActionComponent } from '../home-content/home-call-to-action/home-call-to-action.component';
import { MultiLevelComponent } from "./multi-level/multi-level.component";

@Component({
  selector: 'app-learn-more',
  standalone: true,
  imports: [HomeCallToActionComponent, HomeNewsletterComponent, MultiLevelComponent],
  templateUrl: './learn-more.component.html',
  styleUrl: './learn-more.component.scss'
})
export class LearnMoreComponent {
}
