import { Sprint } from './sprint'

export class Release {
  public sprintCourant : Sprint;
  public sprints : Sprint[];
  public valeurEffort : number;

  constructor(sprintCourant : Sprint, sprints : Sprint[]){
    this.sprints =  sprints;
    this.sprintCourant = sprintCourant;
    this.valeurEffort = 0;
    for(let sprint of this.sprints){
      this.valeurEffort = this.valeurEffort + sprint.valeurEffort;
    }
  }
}
