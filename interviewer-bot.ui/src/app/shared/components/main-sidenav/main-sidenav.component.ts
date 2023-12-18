import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from '../../../services/sidenav.service';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-sidenav',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatListModule, RouterModule],
  templateUrl: './main-sidenav.component.html',
  styleUrls: ['./main-sidenav.component.scss'],
})
export class MainSidenavComponent implements AfterViewInit {
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(private sidenavService: SidenavService) {}

  public ngAfterViewInit(): void {
   // console.log(this.sidenav);
    this.sidenavService.setSidenav(this.sidenav);
  }
}
