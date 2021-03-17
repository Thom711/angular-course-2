import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstCourse = COURSES[0];

  secondCourse = COURSES[1];

  thirdCourse = COURSES[2];

}
