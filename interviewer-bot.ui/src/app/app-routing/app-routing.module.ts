import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatUiComponent } from '../features/chat-ui/chat-ui.component';

const routes: Routes = [
  { path: 'interview', component: ChatUiComponent },
  { path: '', pathMatch: 'full', redirectTo: 'interview' },
  { path: '**', component: ChatUiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
