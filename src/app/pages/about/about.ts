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
  name = Config.repName
  description = Config.aboutDescription
  // background
  bgSub = Config.aboutBgSub 
  bgP1 = Config.aboutBgP1
  bgP2 = Config.aboutBgP2
  bgP3 = Config.aboutBgP3
  // education
  eduCourse1 = Config.aboutEduCourse1
  eduSchool1 = Config.aboutEduSchool1
  eduPeriod1 = Config.aboutEduPeriod1
  eduStatus1 = Config.aboutEduStatus1
  eduCourse2 = Config.aboutEduCourse2
  eduSchoo2 = Config.aboutEduSchool2
  eduPeriod2 = Config.aboutEduPeriod2
  eduStatus2 = Config.aboutEduStatus2
  // experience
  expPosition1 = Config.aboutExpPosition1
  expCompany1 = Config.aboutExpCompany1
  expPeriod1 = Config.aboutExpPeriod1
  expDescription1 = Config.aboutExpDescription1
  expPosition2 = Config.aboutExpPosition2
  expCompany2 = Config.aboutExpCompany2
  expPeriod2 = Config.aboutExpPeriod2
  expDescription2 = Config.aboutExpDescription2
  expPosition3 = Config.aboutExpPosition3
  expCompany3 = Config.aboutExpCompany3
  expPeriod3 = Config.aboutExpPeriod3
  expDescription3 = Config.aboutExpDescription3
}
