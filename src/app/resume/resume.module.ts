import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { HeaderComponent } from './header/header.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  declarations: [ResumeComponent, HeaderComponent, IconButtonComponent],
  imports: [ResumeRoutingModule, CommonModule]
})
export class ResumeModule {}
