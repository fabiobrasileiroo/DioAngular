import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dioInt';
  buttonLabel: string = "CARRINHO"
  buttonSecond: string = 'segundo carrinho'
}
