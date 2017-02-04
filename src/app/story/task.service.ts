import { Injectable } from '@angular/core';
import { TASKS } from './mock-tasks';
import { Task } from '../task'

@Injectable()
export class TaskService {
  getTasks(): Promise<Task[]>{
    return Promise.resolve(TASKS);
  }
}
