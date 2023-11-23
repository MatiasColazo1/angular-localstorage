import { Injectable } from '@angular/core';
import { Tareas } from '../models/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareas: Tareas[];

  constructor() { 
    this.tareas = [
      {titulo: 'leer', descripcion: 'Tengo que leer'},
      {titulo: 'website', descripcion: 'Crear un sitio web'},
    ]
   }

   getTareas() {
    return this.tareas;
   }

   addTareas(tareas: Tareas) {
    this.tareas.push(tareas)
   }
}
