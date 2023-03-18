import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  task: Task = { id: '', description: '', status: 1, date: new Date(), active: true };
  constructor(private taskService: TaskService, private location: Location) { }

  ngOnInit(): void {
  }

  addTask(): void {
    if (!this.task.description || !this.task.status || !this.task.date) {
      return;
    }
    this.taskService.addTask(this.task).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
