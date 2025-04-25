import { Component } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';
import { ExpandablePanelComponent } from './expandable-panel/expandable-panel.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { HightlightBoxComponent } from './hightlight-box/hightlight-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [
    UserProfileComponent,
    CustomSliderComponent,
    ExpandablePanelComponent,
    CustomCardComponent,
    HightlightBoxComponent,
  ],
})
export class AppComponent {
  title = 'first-app - meu primeiro app em angular!';
  title2 = 'Testando HostBinding e HostListener';

  salvarEstado(event: any) {
    console.log('Estado recebido do filho:', event);
    // aqui você pode salvar no backend, estado local, ou apenas logar mesmo
  }
}
