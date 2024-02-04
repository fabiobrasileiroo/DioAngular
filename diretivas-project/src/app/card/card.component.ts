import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos: string[] = []
  data: string= ''
  menuType: string = ''
  constructor() {
    this.produtos = [
      'mouse',
      'teclado',
      'cabo',
      'fonte'
    ]
  }

  ngOnInit(): void {
  }

  adicionar() {
    if(this.data.trim() !== '') {
      this.produtos.push(this.data)
      this.data = ''

    }
  }
  removerpop() {
    this.produtos.pop()
  }
    remover(index: number) {
      this.produtos.splice(index,1)
    }
}
