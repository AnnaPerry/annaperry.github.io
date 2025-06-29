import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  selector: 'portfolio-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {

}
