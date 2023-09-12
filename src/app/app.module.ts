import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AddTaskComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
