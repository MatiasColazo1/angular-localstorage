import { Component, OnInit } from '@angular/core';

import { TareasService } from 'src/app/services/tareas.service';
import { Tareas } from 'src/app/models/tareas';

@Component({
  selector: 'app-tareas-list',
  templateUrl: './tareas-list.component.html',
  styleUrls: ['./tareas-list.component.css']
})
export class TareasListComponent implements OnInit{
  
  tareas: Tareas[]=[];
  
  constructor(public tareasService: TareasService) {  }

  ngOnInit() {
    this.tareas = this.tareasService.getTareas();
  }
}
