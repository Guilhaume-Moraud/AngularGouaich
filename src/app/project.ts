import {Release} from './release'
import {Backlog} from './backlog'
export class Project {
  public projectBacklog : Backlog;
  public projectReleases : Release[];

  constructor(backlog : Backlog, releases : Release[]){
  	this.projectBacklog = backlog;
  	this.projectReleases = releases;
  	}
}
