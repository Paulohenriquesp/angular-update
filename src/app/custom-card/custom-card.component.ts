import { Component } from '@angular/core';

@Component({
  selector: 'custom-card',
  standalone: true,
  template: `
    <div class="card-shadow">
      <ng-content select="card-title">Título Padrão</ng-content>
      <div class="card-divider"></div>
      <ng-content select="card-body">Corpo Padrão</ng-content>
    </div>
  `,
  styles: [
    `
      .card-shadow {
        border: 1px solid #ccc;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        margin: 16px 0;
      }
      .card-divider {
        border-top: 1px solid #ccc;
        margin: 8px 0;
      }
    `,
  ],
})
export class CustomCardComponent {}
