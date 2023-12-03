import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatBotComponent } from './features/chat-bot/chat-bot.component';
import { NavToolbarComponent } from './features/nav-toolbar/nav-toolbar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, ChatBotComponent, NavToolbarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
