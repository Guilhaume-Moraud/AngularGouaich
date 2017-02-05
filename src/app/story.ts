import { Task } from './task';
export class Story {
  public id : number;
  public description : string ;
  public effort : number;
  public tasks : Task[];
  constructor(id : number, description : string, effort : number, tasks : Task[]){
                            this.id = id;
                            this.description = description;
														this.effort = effort;
														this.tasks = tasks;

													}
}
