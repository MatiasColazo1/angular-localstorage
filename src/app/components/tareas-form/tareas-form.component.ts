import { Component, OnInit} from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas-form',
  templateUrl: './tareas-form.component.html',
  styleUrls: ['./tareas-form.component.css']
})
export class TareasFormComponent implements OnInit {
 
   constructor(public tareasService: TareasService) { }

   ngOnInit() {
    
   }

   addTarea(newTitulo:HTMLInputElement, newDescripcion:HTMLTextAreaElement) {
    console.log("agregando", newTitulo.value, newDescripcion.value);
    this.tareasService.addTareas({
      titulo: newTitulo.value,
      descripcion: newDescripcion.value,
      oculto: true
    });
    newTitulo.value = '';
    newDescripcion.value = '';
    newTitulo.focus();
    return false;
   }
}
