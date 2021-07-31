import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  // arreglo bacio que recibe la informacion (en el parentesis puedes poner un alias a la variable que esta en el html
  // @Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }
  
  constructor(private dbzService: DbzService) {}
}
