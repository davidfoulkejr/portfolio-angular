import { Component } from '@angular/core';
import { LoremIpsumService } from '../core';

@Component({
  selector: 'app-resume',
  template: `
    <app-resume-header></app-resume-header>
    <div class="resume__section">
      <div class="content-container resume__headline">
        <h1>David Foulke</h1>
        <h4>Full-Stack Engineer based in Arlington, VA</h4>
      </div>
    </div>
    <div class="resume__section dark">
      <div class="content-container resume__highlights">
        <div class="resume__section__section-heading">
          <h2>Highlights</h2>
        </div>
        <div class="resume__highlights__content">
          <div class="resume__highlights__column">{{ sentences(8) }}</div>
          <div class="resume__highlights__column">{{ sentences(8) }}</div>
        </div>
      </div>
    </div>

    <div class="resume__section">
      <div class="content-container resume__highlights">
        <div class="resume__section__section-heading">
          <h2>Experience</h2>
        </div>
        <div class="resume__highlights__content">
          <div class="resume__highlights__column">{{ sentences(8) }}</div>
          <div class="resume__highlights__column">{{ sentences(8) }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private text: LoremIpsumService) {}

  sentences(count: number) {
    return this.text.generate({ units: 'sentences', count });
  }
}
