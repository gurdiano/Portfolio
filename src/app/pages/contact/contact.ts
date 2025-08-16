import { Component, inject } from '@angular/core';
import { AppConfig, ConfigService } from '../../services/data/config-service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  config!: AppConfig;

  configService = inject(ConfigService);

  constructor () {
    this.config = this.configService.getConfig();
  }
}
