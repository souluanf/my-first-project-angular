import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;


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

}
