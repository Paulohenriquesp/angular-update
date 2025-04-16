import { Component, output } from '@angular/core';

export interface PainelEvento {
  aberto?: boolean;
  mensagem?: string;
}

export interface PainelDeMensagem {
  mensagem: string;
}

@Component({
  selector: 'expandable-panel',
  standalone: true,
  template: `
    <button (click)="enviarMensagem()">Enviar mensagem</button>

    <button (click)="fecharPainel()">Fechar painel</button>
  `,
})
export class ExpandablePanelComponent {
  painelFechado = output<PainelEvento>();
  mensagemEnviada = output<PainelDeMensagem>();

  fecharPainel() {
    this.painelFechado.emit({
      aberto: false,
      mensagem: 'Painel foi fechado pelo usuário',
    });
  }

  enviarMensagem() {
    this.mensagemEnviada.emit({
      mensagem: 'Mensagem enviada pelo painel',
    });
  }
}
