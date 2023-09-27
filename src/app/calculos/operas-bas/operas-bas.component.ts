import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  num1:string='';
  num2:string='';
  resultado:any;
  operacion:string='';

  sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2);
  }

  calcular():void{
    if(this.operacion=='Suma')
    this.resultado=parseInt(this.num1)+parseInt(this.num2);
    else if(this.operacion=='Resta')
    this.resultado=parseInt(this.num1)-parseInt(this.num2);
    else if(this.operacion=='Multiplicacion')
    this.resultado=parseInt(this.num1)*parseInt(this.num2);
    else
      if(parseInt(this.num2)==0)
      this.resultado='¡No se puede dividir entre cero! Elige otro valor';
      else
      this.resultado=parseInt(this.num1)/parseInt(this.num2);
  }
}
