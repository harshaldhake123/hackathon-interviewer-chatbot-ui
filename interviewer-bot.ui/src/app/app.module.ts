import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatUiComponent } from './features/chat-ui/chat-ui.component';
import { NavToolbarComponent } from './features/nav-toolbar/nav-toolbar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { MainSidenavComponent } from './main-sidenav/main-sidenav.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    ChatUiComponent,
    NavToolbarComponent,
    AppRoutingModule,
    RouterModule,
    MainSidenavComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
