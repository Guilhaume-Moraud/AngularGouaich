import { Injectable } from '@angular/core';
import { TASKS } from './mock-tasks';
import { Task } from '../task'

@Injectable()
export class TaskService {
  getTasks(): Promise<Task[]>{
    return Promise.resolve(TASKS);
  }

  getTask(id: number): Promise<Task> {
  return this.getTasks()
             .then(tasks => tasks.find(task => task.id === id));
}

}
