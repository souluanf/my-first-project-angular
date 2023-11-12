import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public addValue = 1;
  public getDados: { nome: string, idade: number } | undefined;

  public add() {
    this.addValue++;
  }

  public setDados(event: { nome: string, idade: number }) {
    this.getDados = event;
  }
}
