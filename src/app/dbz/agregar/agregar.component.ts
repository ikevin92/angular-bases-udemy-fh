import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  //campos
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  agregar() {
    if (this.nuevo.nombre.trim().length === 0 || this.nuevo.poder === 0) {
      return;
    }

    console.log(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
