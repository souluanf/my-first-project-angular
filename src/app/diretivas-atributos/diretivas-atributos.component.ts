import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public date: Date = new Date();
  public value: boolean = true;
  public heightPx: string = '20px';
  public backgroundColor: string = 'red';
  public name: string = '';
  public list: Array<{name: string }> = [{
    name: 'João'
  }, {
    name: 'Maria'
  }, {
    name: 'José'
  }];

  ngOnInit(): void {
    setInterval((): void => {
      this.value = !this.value;
      if (this.heightPx === '20px') {
        this.heightPx = '50px';
        this.backgroundColor = 'blue';
      } else {
        this.heightPx = '20px';
        this.backgroundColor = 'red';
      }
    }, 2000);
  }

  public save(): void {
    if (!this.name) {
      return;
    }
    this.list.push({name: this.name});
    this.name = '';
  }



}
