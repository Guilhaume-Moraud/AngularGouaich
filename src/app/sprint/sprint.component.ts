import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Sprint} from '../sprint'

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent implements OnInit {
  public sprint : Sprint;
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
