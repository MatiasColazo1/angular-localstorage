import { Component, OnInit, Input } from '@angular/core';
import { Tareas } from 'src/app/models/tareas';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit{
    @Input() tarea: Tareas;

    constructor(public tareasService: TareasService) { 
      this.tarea = {} as Tareas;
    }

    ngOnInit() {
      
    }

    deleteTareas(tarea: Tareas) {
      this.tareasService.deleteTareas(tarea)
    }
}
