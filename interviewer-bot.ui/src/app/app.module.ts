import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavToolbarComponent } from './shared/components/nav-toolbar/nav-toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { MainSidenavComponent } from './shared/components/main-sidenav/main-sidenav.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NavToolbarComponent,
    MainSidenavComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
