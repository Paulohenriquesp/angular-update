import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';
import { ExpandablePanelComponent } from './expandable-panel/expandable-panel.component';

@Component({
  selector: 'app-root',
  template: `
    <app-user-profile></app-user-profile>
    <custom-slider
      [value]="30"
      [labelString]="'   O Valor recebido é   '"
      [widthPx]="200"
    ></custom-slider>
    <expandable-panel
      (painelFechado)="salvarEstado($event)"
      (mensagemEnviada)="salvarEstado($event)"
    ></expandable-panel>
  `,
  imports: [
    UserProfileComponent,
    CustomSliderComponent,
    ExpandablePanelComponent,
  ],
  standalone: true,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-app - meu primeiro app em angular!';

  salvarEstado(event: any) {
    console.log('Estado recebido do filho:', event);
    // aqui você pode salvar no backend, estado local, ou apenas logar mesmo
  }
}
