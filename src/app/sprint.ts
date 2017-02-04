import { Story } from './story'
export class Sprint {
  public stories : Story[];
  public valeurEffort : number;

  constructor(stories : Story[]){
    this.stories =  stories;
    this.valeurEffort = 0;
    for(let story of this.stories){
      this.valeurEffort = this.valeurEffort + story.effort;
    }
  }
}
