import { Component } from '@angular/core';
import { BaseCard } from '../../components/base-card/base-card';
import { Config } from '../../app.config';

@Component({
  selector: 'app-about',
  imports: [
    BaseCard,
  ],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  // person
  name = Config.repName;
  description = Config.about.subTitle;
  // background
  bgSub = Config.about.background.subTitle;
  bgP1 = Config.about.background.P1;
  bgP2 = Config.about.background.P2;
  bgP3 = Config.about.background.P3;
  // education
  education = Config.about.education;
  // experience 
  experience = Config.about.experience;
}
