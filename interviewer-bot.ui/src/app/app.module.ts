import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavToolbarComponent } from './shared/components/nav-toolbar/nav-toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { MainSidenavComponent } from './shared/components/main-sidenav/main-sidenav.component';
import { SigninComponent } from './features/interview/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NavToolbarComponent,
    MainSidenavComponent,
    SigninComponent,
    HttpClientModule 
  ],
  providers:[HttpClientModule ],
  bootstrap: [AppComponent],
})
export class AppModule {}
