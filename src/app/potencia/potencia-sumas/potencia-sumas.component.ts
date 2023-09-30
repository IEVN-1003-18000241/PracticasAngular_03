import { Component } from '@angular/core';

@Component({
  selector: 'app-potencia-sumas',
  templateUrl: './potencia-sumas.component.html',
  styleUrls: ['./potencia-sumas.component.css']
})
export class PotenciaSumasComponent {
  num1:string='';
  num2:string='';
  resultado:number=0;
  operacion:string='';

  calcular():void{
    this.resultado=0;
    this.operacion='';
    for(let i=0; i<parseInt(this.num2) ;i++){
      this.resultado+=parseInt(this.num1);
      this.operacion+=this.num1;
      if(i<parseInt(this.num2)-1){
        this.operacion+=' + '
      }
    }
  }
}
