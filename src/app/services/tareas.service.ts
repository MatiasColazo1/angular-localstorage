import { Injectable } from '@angular/core';
import { Tareas } from '../models/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  // Usar una clave única para evitar conflictos con otras aplicaciones
  private storageKey = 'misTareas';

  tareas: Tareas[] = [];

  constructor() { 
    // Recuperar tareas almacenadas en el localStorage al inicializar el servicio
    const storedTareas = localStorage.getItem(this.storageKey);
    if (storedTareas) {
      this.tareas = JSON.parse(storedTareas);
    }
  }

  getTareas() {
    return this.tareas;
  }

  addTareas(tarea: Tareas) {
    this.tareas.push(tarea);

    // Guardar las tareas actualizadas en el localStorage
    this.saveTareasToLocalStorage();
  }

  deleteTareas(tarea: Tareas) {
    const index = this.tareas.indexOf(tarea);
    if (index !== -1) {
      this.tareas.splice(index, 1);

      // Guardar las tareas actualizadas en el localStorage
      this.saveTareasToLocalStorage();
    }
  }

  // Método privado para guardar las tareas en el localStorage
  private saveTareasToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tareas));
  }
}
