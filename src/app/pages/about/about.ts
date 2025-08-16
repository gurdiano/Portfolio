import { Component, inject } from '@angular/core';
import { BaseCard } from '../../components/base-card/base-card';
import { AppConfig, ConfigService } from '../../services/data/config-service';

@Component({
  selector: 'app-about',
  imports: [
    BaseCard,
  ],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  config!: AppConfig;
  
  configService = inject(ConfigService);

  constructor () {
    this.config = this.configService.getConfig();
  }
}
