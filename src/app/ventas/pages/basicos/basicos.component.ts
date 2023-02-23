import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  nombreLower:string = "Francisco";
  nombreUper:string = "FRANCISCO";
  nombreCompleto:string = "kjsdfKJSds";

  fecha:Date = new Date(); // el dia de hoy

}
