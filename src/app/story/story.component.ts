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
    this.story = new Story("Story 1",4,this.tasks);
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
}
