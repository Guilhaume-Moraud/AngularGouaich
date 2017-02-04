import { Story } from './story'

export class Backlog{

  public backlogStories : Story[];

  constructor(stories : Story[]){
    this.backlogStories = stories;
  }

}
