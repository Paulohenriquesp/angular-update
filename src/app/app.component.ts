import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';

@Component({
  selector: 'app-root',
  template: `
    <app-user-profile></app-user-profile>
    <custom-slider
      [value]="30"
      [labelString]="'   O Valor recebido é   '"
      [widthPx]="200"
    ></custom-slider>
    <!-- aqui! -->
  `,
  imports: [UserProfileComponent, CustomSliderComponent],
  standalone: true,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-app - meu primeiro app em angular!';
}
