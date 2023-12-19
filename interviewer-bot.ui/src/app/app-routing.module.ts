import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowResultsComponent } from './features/interview/show-results/show-results.component';

const routes: Routes = [
  {
    path: 'interview',
    loadChildren: () =>
      import('./features/interview/interview.module').then(
        (m) => m.InterviewModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'interview' },
  { path: 'results', component: ShowResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
