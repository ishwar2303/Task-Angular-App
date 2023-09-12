import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { TaskComponentService } from './services/task/task.service';
import { Task } from './models/task/task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'task-angular-app';


}
