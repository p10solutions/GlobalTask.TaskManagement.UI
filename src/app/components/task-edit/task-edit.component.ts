import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  @Input() task!: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.taskService.getTask(id.toString()).subscribe(task => this.task = task);
  }

  save(): void {
    if (!this.task.description || !this.task.status || !this.task.date) {
      return;
    }
    this.taskService.updateTask(this.task).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
