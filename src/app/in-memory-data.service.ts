import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task'
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let tasks = [
      new Task(1,'task1','10min'),
      new Task(2,'task2','20min'),
      new Task(3,'task3','30min'),
      new Task(4,'task4','40min'),
      new Task(5,'task5','50min'),
    ];
    return {tasks};
  }
}
