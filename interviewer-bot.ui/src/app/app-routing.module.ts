import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'interview',
    loadChildren: () =>
      import('./features/interview/interview.module').then(
        (m) => m.InterviewModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'interview' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
