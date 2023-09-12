import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task/task';
import { TaskComponentService } from 'src/app/services/task/task.service';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {

  // @ts-ignore
  taskForm: FormGroup;

  // @ts-ignore
  task: Task

  constructor(private formBuilder: FormBuilder, private router: Router, private taskComponentService: TaskComponentService) {}

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: [''],
      assignmentGroup: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      dueDate: ['', [Validators.required]]
    })

  }

  handleSubmit(): void {

    // Update task model
    this.task = this.taskForm.value
    this.task.taskId = parseInt((Math.random()*10000000000).toString())
    this.task.status = 'PENDING'
    this.task.isDeleted = false
    this.task.addedOn = (new Date()).toUTCString()
    this.task.comments = []
    console.log(this.task)

    if(this.taskForm.invalid) return
    this.taskComponentService.addTask(this.task)
    this.router.navigate(['tasks'])
  }

}
