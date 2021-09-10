import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'primer programa angular';
  n1 : number;
  n2:number;
  resultado:number;

  public operar(op:string):void{
switch(op){
  case 's':
    this.resultado = this.n1 + this.n2;
    break;
  case 'r':
    this.resultado = this.n1 - this.n2;
    break
  case 'm':
    this.resultado = this.n1 * this.n2;
    break;
  case 'd':
    this.resultado = this.n1 / this.n2;
    break;
  default:
    this.resultado = 0;
}

  }


}
