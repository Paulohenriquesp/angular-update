import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';
import { ExpandablePanelComponent } from './expandable-panel/expandable-panel.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { HightlightBoxComponent } from './hightlight-box/hightlight-box.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { LifecycleLoggerComponent } from './lifecycle-logger/lifecycle-logger.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [
    CommonModule,
    UserProfileComponent,
    CustomSliderComponent,
    ExpandablePanelComponent,
    CustomCardComponent,
    HightlightBoxComponent,
    ProfilePhotoComponent,
    LifecycleLoggerComponent,
  ],
})
export class AppComponent {
  title = 'first-app - meu primeiro app em angular!';
  title2 = 'Testando HostBinding e HostListener';

  salvarEstado(event: any) {
    console.log('Estado recebido do filho:', event);
    // aqui você pode salvar no backend, estado local, ou apenas logar mesmo
  }

  userName = 'João';
  showLogger = true;

  changeName() {
    this.userName = 'Maria ' + Math.floor(Math.random() * 100);
  }

  destroyComponent() {
    this.showLogger = false;
  }
}
