import { Component } from '@angular/core';
import { Config } from '../../app.config';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  school = Config.school;
  name = Config.repName;
}
