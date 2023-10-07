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
  subtotal:number=0;
  descuento:number=0;
  descuentoTarj:number=0;
  mensaje:string='';

  procesar(){
    this.totalFinal=0;
    this.descuento=0;
    this.subtotal=0;
    this.descuentoTarj=0;
    this.boletosTotales=this.cantBoletos/parseInt(this.cantComprad);
    if(this.boletosTotales>7){
      this.mensaje='¡Solo se pueden comprar 7 boletos por persona como máximo!';
    }
    else{
      if(this.boletosTotales<=2){
        if(this.tarjetaCineco=='si'){
          this.descuentoTarj=(this.cantBoletos*12)*0.1;
          this.totalFinal=(this.cantBoletos*12)-this.descuentoTarj;
          this.mensaje='Nombre: '+ this.nombre +'\n Boletos totales: ' + this.cantBoletos +'\n Número de clientes: '+this.cantComprad;
        }
        else if(this.tarjetaCineco=='no'){
          this.totalFinal=this.cantBoletos*12;
          this.mensaje='Nombre: '+ this.nombre +'\n Boletos totales: ' + this.cantBoletos +'\n Número de clientes: '+this.cantComprad;
        }
      }
      if(this.cantBoletos>2 && this.cantBoletos<=5){
        if(this.tarjetaCineco=='si'){
          this.descuento=(this.cantBoletos*12)*0.1;
          this.subtotal=(this.cantBoletos*12)-this.descuento;
          this.descuentoTarj=this.subtotal*0.1;
          this.totalFinal=this.subtotal-this.descuentoTarj;
          this.mensaje='Nombre: '+ this.nombre +'\n Boletos totales: ' + this.cantBoletos +'\n Número de clientes: '+this.cantComprad;
        }
        else if(this.tarjetaCineco=='no'){
          this.descuento=(this.cantBoletos*12)*0.1;
          this.totalFinal=(this.cantBoletos*12)-this.descuento;
          this.mensaje='Nombre: '+ this.nombre +'\n Boletos totales: ' + this.cantBoletos +'\n Número de clientes: '+this.cantComprad;
        }
      }
      if(this.cantBoletos>5){
        if(this.tarjetaCineco=='si'){
          this.descuento=(this.cantBoletos*12)*0.15;
          this.subtotal=(this.cantBoletos*12)-this.descuento;
          this.descuentoTarj=this.subtotal*0.1;
          this.totalFinal=this.subtotal-this.descuentoTarj;
          this.mensaje='Nombre: '+ this.nombre +'\n Boletos totales: ' + this.cantBoletos +'\n Número de clientes: '+this.cantComprad;
        }
        else if(this.tarjetaCineco=='no'){
          this.descuento=(this.cantBoletos*12)*0.15;
          this.totalFinal=(this.cantBoletos*12)-this.descuento;
          this.mensaje='Nombre: '+ this.nombre +'\n Boletos totales: ' + this.cantBoletos +'\n Número de clientes: '+this.cantComprad;
        }
      }
    }
  }

  salir(){
    this.nombre='';
    this.cantComprad='';
    this.cantBoletos=0;
    this.boletosTotales=0;
    this.tarjetaCineco='';
    this.totalFinal=0;
    this.mensaje='';
    this.descuento=0;
    this.subtotal=0;
    this.descuentoTarj=0;
  }
}
