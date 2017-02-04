import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { SprintComponent } from './sprint/sprint.component';
import { ReleaseComponent } from './release/release.component';
import { StoryComponent } from './story/story.component';
import { TaskComponent } from './task/task.component';
import { BacklogComponent } from './backlog/backlog.component';

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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, StoryComponent]
})
export class AppModule { }
