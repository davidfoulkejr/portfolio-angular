import { Component } from '@angular/core';
import { LoremIpsumService } from '../core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  constructor(private text: LoremIpsumService) {}

  sentences(count: number) {
    return this.text.generate({ units: 'sentences', count });
  }
}
