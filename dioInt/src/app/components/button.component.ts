import { Component, VERSION, Input, ViewChild} from "@angular/core";

@Component ({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class Button {
  @Input() label: string = ''
  buttonText: string ='Acessar '+ VERSION.full  
  number: number = 0
  vetor: number[] = []
  buttonObject = {
    label: 'adicionar ao carrinho'
  }
  click() {
  this.number = this.number+1
  this.vetor.push(this.number)
  }
  getAlert(number: number) {
    alert(number)
  }
}