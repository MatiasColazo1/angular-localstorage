import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { TareasFormComponent } from './components/tareas-form/tareas-form.component';
import { TareasListComponent } from './components/tareas-list/tareas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TareasComponent,
    TareasFormComponent,
    TareasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
