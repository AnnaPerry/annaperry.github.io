import { Component } from '@angular/core';
import { BannerComponent } from '../app/about-me/banner.component';
import { MainContentComponent } from '../app/main-content/main-content.component';

@Component({
  imports: [BannerComponent, MainContentComponent],
  selector: 'portfolio-home-page',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
