import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task/task';
import { TaskComponentService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  @Output() softDeleteEvent = new EventEmitter<string>();
  
  // @ts-ignore
  task: Task

  // @ts-ignore
  tasks: Task[]

  constructor(private taskService: TaskComponentService) { }

  ngOnInit(): void {
  }

  selectedTask(): void {
    localStorage.setItem('DeleteTaskId', this.task.taskId.toString())
  }



  
}
