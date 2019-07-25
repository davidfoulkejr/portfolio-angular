import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-header',
  template: `
    <div class="header__container">
      <div class="header__content content-container">
        <div class="header__item">
          <h2 class="header__title">David Foulke</h2>
        </div>
        <div class="header__spacer"></div>
        <div class="header__item">
          <ul class="header__actions">
            <li class="header__action-button">
              <app-icon-button source="gmail" fill="#fff"></app-icon-button>
            </li>
            <li class="header__action-button">
              <app-icon-button source="github" fill="#fff"></app-icon-button>
            </li>
            <li class="header__action-button">
              <app-icon-button source="linkedin" fill="#fff"></app-icon-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div></div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}
