import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../story';
import { Task } from '../task';
import { TaskService } from './task.service'
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  //providers: [TaskService]
})
export class StoryComponent implements OnInit {
  story : Story;
  constructor(private taskService: TaskService) { }
  tasks : Task[];
  effort : number;
  description : string;
  selectedTask : Task;

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


}
