import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatUiComponent } from './features/chat-ui/chat-ui.component';
import { NavToolbarComponent } from './features/nav-toolbar/nav-toolbar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, ChatUiComponent, NavToolbarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
