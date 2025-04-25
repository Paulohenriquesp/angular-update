import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.css'],
  host: {
    role: 'presentation', // Valor fixo
    '[id]': 'id', // Binding dinâmico
  },
})
export class ProfilePhotoComponent {
  @Input() ids: string = 'profile-3333';

  @HostBinding('id') id: string = 'profile-666'; // ID dinâmico do componente
}
