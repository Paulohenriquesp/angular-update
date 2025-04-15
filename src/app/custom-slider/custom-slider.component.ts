import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'custom-slider',
  standalone: true,
  template: `
    <div style="border: 1px solid #ccc; padding: 1rem; border-radius: 8px;">
      <p><strong>Valor recebido:</strong> {{ value() }}</p>
    </div>
  `,
})
export class CustomSliderComponent {
  value = input.required<number>(); // valor padrão obrigatório
  label = computed(() => `o valor atual é: ${this.value()}`);
}
