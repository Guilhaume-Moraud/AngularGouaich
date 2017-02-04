import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Task } from '../task'
import { TaskService} from '../story/task.service'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  task : Task;
  constructor( private taskService: TaskService,
  private route: ActivatedRoute,
  private location: Location) {
  }

ngOnInit() {
  this.route.params
   .switchMap((params: Params) => this.taskService.getTask(+params['id']))
   .subscribe(task => this.task = task);

}
goBack(): void {
  this.location.back();
}

}
