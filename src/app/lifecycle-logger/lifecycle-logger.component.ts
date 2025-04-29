import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-logger',
  standalone: true,
  template: `<p>Lifecycle Logger works! Nome: {{ name }}</p>`,
  styleUrl: './lifecycle-logger.component.css',
})
export class LifecycleLoggerComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() name: string = '';

  //Angular cria a instância da classe
  constructor() {
    console.log('constructor');
  }
  //ngOnChanges() (se existir @Input() inicial)	Detecta mudanças iniciais
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  //Pode inicializar lógica mais pesada que dependa de dados externos. 	Configurações iniciais (chamada API, etc)
  ngOnInit() {
    console.log('ngOnInit');
  }

  //Verificações manuais de mudanças
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  //Conteúdo <ng-content> inicializado
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  //Conteúdo checado
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  //View (template + componentes filhos) montada
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  //View checada após mudanças
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}

/*
🌟 Como o Angular vive um componente (do nascimento até o fim) 🌟

🏗️ Construtor (constructor)
- O Angular constrói a casinha do componente.
- Só monta a estrutura básica: paredes, portas, janelas... Nada decorado ainda!

🚪 Inputs são colocados (@Input())
- O Angular coloca os móveis na casa (cama, sofá, geladeira).
- Esses móveis são os dados que vêm de fora.

🎬 Abertura oficial (ngOnInit)
- Agora o Angular abre a porta e você pode decorar e organizar:
  - Buscar informações na internet (API).
  - Organizar móveis.

👀 Atualizações especiais (ngOnChanges)
- Se algum móvel novo chegar ou algo mudar, o Angular avisa aqui!
- Tipo: "Ei! Chegou uma TV nova! Quer trocar a antiga? 📺"

🧹 Pequenas arrumações (ngDoCheck)
- O Angular dá uma olhada rápida para ver se precisa arrumar algo.
- Imagina alguém passando pela casa de vez em quando para ver se está tudo certo.

🪞 Montagem dos espelhos e quadros (ngAfterContentInit)
- Depois que todo o conteúdo que veio de fora entrou na casa (tipo quadros ou plantas que você trouxe), o Angular fala: "Agora sim, pode usar!"

🔍 Revisão dos espelhos e quadros (ngAfterContentChecked)
- O Angular dá uma última olhadinha:
  - "Esses quadros estão tortos? 🤔"
  - "Precisa arrumar algo?"

🛋️ Montagem final da decoração (ngAfterViewInit)
- Depois que tudo (até o que o Angular colocou automático, tipo cortinas e lâmpadas) estiver montado, ele avisa:
  - "Agora pode acender as luzes e usar a casa toda!"

🛠️ Revisão final das decorações (ngAfterViewChecked)
- O Angular faz uma última checagem para garantir:
  - "A cortina ficou bonita?"
  - "O tapete tá no lugar?"

💣 Destruição do componente (ngOnDestroy)
- Hora de derrubar a casinha! 🏚️
- O Angular limpa tudo para não deixar sujeira:
  - Tira móveis.
  - Joga lixo fora.
  - Fecha a porta e vai embora.
*/
