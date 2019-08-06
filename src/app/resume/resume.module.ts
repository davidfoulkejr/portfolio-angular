import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ResumeComponent, HeaderComponent, FooterComponent],
  imports: [ResumeRoutingModule, CommonModule]
})
export class ResumeModule {}
