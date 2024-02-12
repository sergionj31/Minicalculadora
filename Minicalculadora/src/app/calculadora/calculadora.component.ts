import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  n1: number = 0;
  n2: number = 0;
  resultado: number = 0;

  sumar(num1: number, num2: number): void{
    this.resultado= num1+num2;
  }

  restar(num1: number, num2: number): void{
    this.resultado= num1-num2;
  }
}
