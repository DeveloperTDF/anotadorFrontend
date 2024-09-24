import { Component } from '@angular/core';

interface Nota {

  fecha:    String;
  nombre:   String;
  temario:  String;
  titulo:   String; 
  apunte:   String; 
}
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})




export class Tab3Page {

   lista: Nota[] = [
    {
      fecha: '2022-01-01',
      nombre: 'Matemáticas',
      temario: 'Álgebra',
      titulo: 'Ecuaciones lineales',
      apunte: 'Notas sobre ecuaciones lineales'
    },
    {
      fecha: '2022-01-15',
      nombre: 'Física',
      temario: 'Mecánica',
      titulo: 'Movimiento rectilíneo',
      apunte: 'Notas sobre movimiento rectilíneo'
    },
    {
      fecha: '2022-02-01',
      nombre: 'Programación',
      temario: 'TypeScript',
      titulo: 'Interfaces y tipos',
      apunte: 'Notas sobre interfaces y tipos en TypeScript'
    },
    {
      fecha: '2022-03-01',
      nombre: 'Química',
      temario: 'Química orgánica',
      titulo: 'Reacciones químicas',
      apunte: 'Notas sobre reacciones químicas'
    },
    {
      fecha: '2022-04-01',
      nombre: 'Biología',
      temario: 'Biología celular',
      titulo: 'Estructura celular',
      apunte: 'Notas sobre estructura celular'
    }
  ];

  constructor() {}

}
