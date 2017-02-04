import { Task } from './task';
export class Story {
  public description : string ;
  public effort : number;
  public tasks : Task[];
  constructor(description : string, effort : number, tasks : Task[]){
														this.description = description;
														this.effort = effort;
														this.tasks = tasks;
													}
}
