import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { TaskComponent } from 'src/app/components/task/task.component';
import { Task } from 'src/app/models/task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskComponentService {


  // @ts-ignore
  tasks: Task[]

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadTaskComponent(viewContainerRef: ViewContainerRef, task: Task) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(TaskComponent);
    // viewContainerRef.clear(); // Clear any existing components in the view container
    
    console.log('Creating component...')
    const componentRef = factory.create(viewContainerRef.parentInjector);
    componentRef.instance.task = task
    console.log('Component created')
    viewContainerRef.insert(componentRef.hostView);
    console.log('Component inserted in view')
  }

  clearAllTasks(viewContainerRef: ViewContainerRef) {
    viewContainerRef.clear()
    console.log('Removed all components from view')
  }

  addTask(task: Task) {
    console.log('Fetching all tasks')
    this.tasks = this.fetchAll()
    console.log('Pushing new task')
    this.tasks.push(task)
    console.log('Updating tasks in local storage')
    this.updateTasksData(this.tasks)
    localStorage.setItem('TasksBackup', JSON.stringify(this.tasks))
  }

  deleteAllTasksPermanently(): void {
    console.log('Delete all tasks from local storage')
    localStorage.setItem('Tasks', '[]')
  }

  fetchAll(): any {
    let tasks = []
    let data = localStorage.getItem('Tasks')

    if(!data) {
      data = "[]"
    }

    try {
      tasks = JSON.parse(data)
    }
    catch(err) {
      console.log('PARSE Error in Fetch All Tasks')
      console.log(err)
    }
    finally {
      console.log('Fetched Data')
      console.log(tasks)
      return tasks.sort((a: any, b: any) => a.taskId - b.taskId)
    }

  }

  updateTasksData(tasks: Task[]): void {
    localStorage.setItem('Tasks', JSON.stringify(tasks))
    let data = localStorage.getItem('Tasks')
    if(data) this.tasks = JSON.parse(data)
    else this.tasks = []
  }


  deleteTask(taskId: string): void {
    console.log(this.tasks)
    if(!this.tasks) return
    this.tasks = this.tasks.filter((item) => item.taskId !== parseInt(taskId))
    this.updateTasksData(this.tasks)
  }

  fetchByFilter(group: string): Task[]{
    this.tasks = this.fetchAll()
    this.tasks = this.tasks.filter((item) => item.assignmentGroup === group)
    return this.tasks
  }

}