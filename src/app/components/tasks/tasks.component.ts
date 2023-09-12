import { Component, OnInit } from '@angular/core';
import { TaskComponentService } from 'src/app/services/task/task.service';
import { ViewChild, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  loadingTasks: boolean = true

  // @ts-ignore
  tasks: any = []

  // @ts-ignore
  @ViewChild('taskComponentContainer', { read: ViewContainerRef }) taskComponentContainer: ViewContainerRef;
  constructor(private taskService: TaskComponentService) {}

  ngOnInit():void {
    setTimeout(() => {
      this.getTasks()
      this.loadTasks()
    }, 100)
  }

  getTasks(): void {
    this.tasks = this.taskService.fetchAll()
  }
  
  loadTasks(): void {
    this.taskService.clearAllTasks(this.taskComponentContainer)
    for(let i=0; i<this.tasks.length; i++) {
    this.taskService.loadTaskComponent(this.taskComponentContainer, this.tasks[i])
    }
    this.loadingTasks = false
  }

  refresh(): void {
    this.loadTasks()
  }

  deleteAllTasks(): void {
    this.taskService.deleteAllTasksPermanently()
  }

  deleteTask(): void {
    let taskId = localStorage.getItem('DeleteTaskId')
    if(!taskId) return
    this.taskService.deleteTask(taskId?.toString())
    this.tasks = this.taskService.fetchAll()
    this.loadTasks()
  }

  filterByGroup(group: string): void {
    this.tasks = this.taskService.fetchByFilter(group)
    this.loadTasks()
  }

}
