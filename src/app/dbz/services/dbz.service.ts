import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {
  constructor() {}

  // el estandar para propiedades privadas es el guion bajo
  private _personajes: Personaje[] = [
    { nombre: 'Goku', poder: 1500 },
    { nombre: 'Vegueta', poder: 2000 },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
