import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'custom-slider',
  standalone: true,
  template: `
    <div style="border: 1px solid #ccc; padding: 1rem; border-radius: 8px;">
      <p>
        <strong>{{ labelString() }}</strong> {{ value() }} -- {{ widthPx() }}
      </p>
    </div>
  `,
  host: {
    role: 'slider',
    '[attr.aria.valuenow]': 'value()',
    '[class.active]': 'value() > 50',
    '[tabIndex]': 'value() > 50 ? 0 : -1',
    '(keydown)': 'handleKeyDown($event)',
  },
})
export class CustomSliderComponent {
  value = input.required<number>(); // valor padrão obrigatório
  label = computed(() => `o valor atual é: ${this.value()}`);
  labelString = input('', { transform: trimString });
  widthPx = input('', { transform: appendPx });

  handleKeyDown(event: KeyboardEvent) {
    console.log('Tecla pressionada:', event.key);
  }
}

function trimString(value: string | undefined): string {
  return value?.trim() ?? '';
}

function appendPx(value: number): string {
  return `${value}px`;
}
