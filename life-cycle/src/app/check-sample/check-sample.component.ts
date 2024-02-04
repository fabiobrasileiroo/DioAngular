import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css'],
})
export default class CheckSampleComponent
  implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  quantidade: number = 0
  constructor() {
  }
  adicionar() {
    this.quantidade += 1
  }
  decrementar() {
    if(this.quantidade > 0) {
      this.quantidade -= 1
    }
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.log('ngAgterContentChecked');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
      console.log('good bay me amigo')
  }
}
