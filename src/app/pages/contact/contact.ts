import { Component } from '@angular/core';
import { Config } from '../../app.config';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  name = Config.repName
  linkedinUrl = Config.linkedinUrl
  githubUrl = Config.githubUrl
  emailUrl = Config.emailUrl
  facebookUrl = Config.facebookUrl
  instagramUrl = Config.instagramUrl
  discordUrl = Config.discordUrl
  whatsappUrl = Config.whatsappUrl
}
