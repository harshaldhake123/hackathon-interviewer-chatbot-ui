import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-nav-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.scss'],
})
export class NavToolbarComponent {
  constructor(private sidenav: SidenavService) {}

  public toggleSidenav(): void {
    this.sidenav.toggle();
  }
}
