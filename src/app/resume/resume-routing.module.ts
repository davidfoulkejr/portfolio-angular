import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule {}
