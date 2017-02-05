import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from '../story';
import { Task } from '../task';
import { TaskService } from './task.service'
@Component({
  moduleId: this.module.id,
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  story : Story;

  tasks : Task[];
  effort : number;
  description : string;
  selectedTask : Task;
  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.getTasks();
    this.story = new Story(1,"Story 1",4,this.tasks);
  }
  getTasks() : void {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }
  onSelect(task: Task): void{
    this.selectedTask = task;

  }

  gotoDetail(): void {
   this.router.navigate(['/task', this.selectedTask.id]);
 }

 add(description: string, temps: string): void {

  if (!description) { return; }
  this.taskService.create(description,temps,this.story.id)
    .then(task => {
      this.tasks.push(task);
      this.selectedTask = null;
    });
  }
  delete(task: Task): void {
  this.taskService
      .delete(task.id)
      .then(() => {
        this.tasks = this.tasks.filter(h => h !== task);
        if (this.selectedTask === task) { this.selectedTask = null; }
      });
}
}
