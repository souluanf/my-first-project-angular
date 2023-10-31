import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public items: Array<{ name: string, age: number }> = [
    {name: 'Luan', age: 29},
    {name: 'Heimy', age: 20},
    {name: 'Safira', age: 1},
    {name: 'Gordinho', age: 2},
  ]

  private _itemCount: number = this.items.length + 1;


  ngOnInit(): void {
    setInterval(
      (): void => {
        this.condition = !this.condition
      }, 1000
    )
  }

  public onClick(): void {
    this.conditionClick = !this.conditionClick
  }

  addItem(): void {
    this.items.push({name: 'Added', age: this._itemCount})
    this._itemCount++;
  }

  onClickEventList(event: number): void {
    this.items.splice(event, 1)
  }
}
