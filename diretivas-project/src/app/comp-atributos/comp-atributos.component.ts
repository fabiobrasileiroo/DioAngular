import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo:string = 'enable'
  corFundo: string = '#f15555'
  corDaFonte:string = "lightblue"
  item:string = ''
  listas: string[] = []
  isEnableBlock:boolean | undefined = undefined
  constructor() { }

  ngOnInit(): void {
  }
  adicionarLista() {
    this.listas.unshift(this.item)
    this.isEnableBlock = true
    setTimeout(() => {
      this.isEnableBlock = undefined
    }, 3000);
  }
  trocar() {
    this.estilo === 'enable'? this.estilo = "disable": this.estilo = 'enable'
  }

}
