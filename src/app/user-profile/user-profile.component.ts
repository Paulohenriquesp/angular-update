import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  template: `
    <h1>User profile</h1>
    <p>This is the user profile page</p>

    <h2>{{ firstName() }}</h2>
    <h3>{{ firstNameCapitalized() }}</h3>
    <button (click)="changeName()">Change name</button>

    <button (click)="upperCaseName()">Maiúsculas</button>

    <button (click)="activateTrial()">Ativar trial</button>
    <button (click)="expireTrial()">Expirar trial</button>

    <p>{{ trialStatus() }}</p>
    <p *ngIf="showTrialDuration()">"</p>
  `,
  imports: [CommonModule],
  styles: `h1 { font-size: 3em; } `,
})
export class UserProfileComponent {
  firstName = signal('Lucas');

  changeName() {
    this.firstName.set('Lucas Oliveira');
  }

  upperCaseName() {
    this.firstName.update((name) => name.toUpperCase());
  }

  firstNameCapitalized = computed(() => this.firstName().toUpperCase());

  isTrial = signal(false);
  isTrialExpired = signal(false);
  showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired());

  activateTrial() {
    this.isTrial.set(true);
  }

  expireTrial() {
    this.isTrialExpired.set(true);
  }
  constructor() {
    effect(() => {
      console.log('Nome atual:', this.firstName());
    });

    effect(() => {
      console.log('Trial ativo?', this.showTrialDuration());
    });
  }

  trialStatus = computed(() => {
    if (this.isTrial() && !this.isTrialExpired()) {
      return 'Seu período de teste está ativo!';
    } else if (this.isTrial() && this.isTrialExpired()) {
      return 'Seu período de teste expirou.';
    } else {
      return 'Você ainda não iniciou o período de teste.';
    }
  });
}
