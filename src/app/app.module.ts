import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { SprintComponent } from './sprint/sprint.component';
import { ReleaseComponent } from './release/release.component';
import { StoryComponent } from './story/story.component';
import { TaskComponent } from './task/task.component';
import { BacklogComponent } from './backlog/backlog.component';

import { TaskService } from './story/task.service'

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    SprintComponent,
    ReleaseComponent,
    StoryComponent,
    TaskComponent,
    BacklogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{path: 'story', component: StoryComponent},
    {path: 'task/:id', component: TaskComponent},
    {path: 'sprint', component: SprintComponent},
    {path: 'release', component: ReleaseComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'backlog', component: BacklogComponent}
  ])
  ],

  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
