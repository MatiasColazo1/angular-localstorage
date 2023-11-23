import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tareas-form',
  templateUrl: './tareas-form.component.html',
  styleUrls: ['./tareas-form.component.css']
})
export class TareasFormComponent implements OnInit {
 
   constructor() { }

   ngOnInit() {
    
   }

   addTarea(newTitulo:HTMLInputElement, newDescripcion:HTMLTextAreaElement) {
    console.log("agregando", newTitulo.value, newDescripcion.value);
    return false;
   }
}
