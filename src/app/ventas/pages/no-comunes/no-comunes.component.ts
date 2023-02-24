import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {

    //i18nSelect
  nombre:string = "Francisco";
  genero:string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }
  //i18nPlural
  clientes: string [] = ['Maria','Pedro','Yuanito'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }
  cambiarCliente(){
    this.nombre = 'Fernanda';
    this.genero = 'femenino';
  }
  borrarCliente(){
    this.clientes.pop();
  }

  //Keyvalue Pipe
  persona = {
    nombre: 'Francisco',
    edad: 26,
    direccion: 'Londres, UK'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true, 
    },
    {
      nombre: 'Robin',
      vuela: false, 
    },
    {
      nombre: 'Aquaman',
      vuela: false, 
    }
  ]

  //Async Pipe
  miObservable = interval(5000);
  valorPromesa = new Promise((resolve,reject) =>{
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    },3500);
  })


}
