import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  nombre:string='';
  cantComprad:string='';
  cantBoletos:number=0;
  boletosTotales:number=0;
  tarjetaCineco:string='';
  totalFinal:number=0;
  mensaje:string='';

  procesar(){
    this.totalFinal=0;
    this.boletosTotales=this.cantBoletos/parseInt(this.cantComprad);
    if(this.boletosTotales>7){
      this.mensaje='¡Solo se pueden comprar 7 boletos por persona como máximo!';
    }
    else{
      if(this.boletosTotales<=2){
        if(this.tarjetaCineco=='si'){
          this.totalFinal=(this.boletosTotales*12)*0.9;
        }
        else{
          this.totalFinal=this.boletosTotales*12;
        }
      }
    }
  }

  salir(){

  }
}
