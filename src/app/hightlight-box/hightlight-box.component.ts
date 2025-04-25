import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'hightlight-box',
  standalone: true,
  template: `
    <div class="content">
      <p>Passe o mouse aqui!</p>
    </div>
  `,
  styleUrl: './hightlight-box.component.css',
})
export class HightlightBoxComponent {
  private isHighLighted = false;

  @HostBinding('class.highlighted')
  get highlighted() {
    return this.isHighLighted;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHighLighted = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHighLighted = false;
  }
}
