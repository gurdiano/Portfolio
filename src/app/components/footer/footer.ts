import { Component } from '@angular/core';
import { Config } from '../../app.config';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  name = Config.repName;
  copy = Config.copyright;
  linkedinName = Config.likedin;
  emailName = Config.email;
}
