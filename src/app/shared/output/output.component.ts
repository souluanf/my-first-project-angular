import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string, idade: number }> = [
    {nome: 'João', idade: 18},
    {nome: 'Maria', idade: 20},
    {nome: 'José', idade: 30},
    {nome: 'Pedro', idade: 40},
    {nome: 'Paulo', idade: 50},
  ];

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }
}
