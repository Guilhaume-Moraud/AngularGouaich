
import { Story} from '../story';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StoryService {

  private storiesUrl = 'api/stories'

  constructor(private http: Http) { }

  getTasks(): Promise<Story[]>{
    return this.http.get(this.storiesUrl)
            .toPromise()
            .then(response => response.json().data as Story[])
            .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
 console.error('An error occurred', error); // for demo purposes only
 return Promise.reject(error.message || error);
}
    //return Promise.resolve(TASKS);


  getTask(id: number): Promise<Story> {
    const url = `${this.storiesUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Story)
        .catch(this.handleError);


}

private headers = new Headers({'Content-Type': 'application/json'});

update(story: Story): Promise<Story> {
  const url = `${this.storiesUrl}/${story.id}`;
  return this.http
    .put(url, JSON.stringify(story), {headers: this.headers})
    .toPromise()
    .then(() => story)
    .catch(this.handleError);
}

create(description: string, effort: string): Promise<Story> {
  return this.http
    .post(this.storiesUrl, JSON.stringify({description: description, effort: effort}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
}
delete(id: number): Promise<void> {
  const url = `${this.storiesUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

}
