import {Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  public name: string = 'Luan';
  public age: number = 29;
  public checkedDisabled: boolean = false;
  public imgSrc: string = 'https://picsum.photos/200/300';
  public showImage: boolean = true;
  public textButton: string = 'Hide Image';
  public position: { x: number, y: number } = {x: 0, y: 0};

  public hideImage(): void {
    this.showImage = !this.showImage;
    this.textButton = this.showImage ? 'Hide Image' : 'Show Image';
  }

  alertInfo(value: MouseEvent): void {
    console.log(value)
  }

  mouseMoveTeste(event: MouseEvent): void {
    this.position.x = event.offsetX
    this.position.y = event.offsetY;
  }
}
