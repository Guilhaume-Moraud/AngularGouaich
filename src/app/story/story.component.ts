import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../story'
import { Task } from '../task'
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  story : Story;
  constructor() { }
  strings  : string[] = ["tata", "toto"] ;
  tasks : Task[];
  effort : number;
  description : string;
  selectedTask : Task;
  ngOnInit() {

    var task1 = new Task('task1','10min');
    var task2 = new Task('task2','20min');
    var task3 = new Task('task3','30min');
    this.story = new Story("Story 1",4,[task1, task2, task3]);
    this.tasks = this.story.tasks;
  }

  onSelect(task: Task): void{
    this.selectedTask = task;

  }


}
