import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public value : boolean = true;
  ngOnInit(): void {
    setInterval((): void => {
      this.value = !this.value;
    }, 2000);
  }

}