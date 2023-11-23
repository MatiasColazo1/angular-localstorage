import { Injectable } from '@angular/core';
import { Tareas } from '../models/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareas: Tareas[];

  constructor() { 
    this.tareas = [
      {titulo: 'leer', descripcion: 'Tengo que leer', oculto: true},
      {titulo: 'website', descripcion: 'Crear un sitio web', oculto: true},
    ]
   }

   getTareas() {
    return this.tareas;
   }

   addTareas(tareas: Tareas) {
    this.tareas.push(tareas);
   }

   deleteTareas(tareas: Tareas) {
    for(let i = 0; i < this.tareas.length; i++) {
      if(tareas == this.tareas[i]){
        this.tareas.splice(i, 1);
      }
    }
   }
}
