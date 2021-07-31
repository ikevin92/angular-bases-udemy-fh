import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  personajes: Personaje[] = [
    { nombre: 'Goku', poder: 1500 },
    { nombre: 'Vegueta', poder: 2000 },
  ];

  nuevo: Personaje = {
    nombre: 'Kamisama',
    poder: 300,
  };

  agregarNuevoPersonaje(personaje: Personaje) {
    this.personajes.push(personaje);
  }
}
