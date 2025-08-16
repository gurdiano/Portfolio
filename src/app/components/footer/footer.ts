import { Component, inject } from '@angular/core';
import { AppConfig, ConfigService } from '../../services/data/config-service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  config!: AppConfig;
  
  configService = inject(ConfigService);

  constructor () {
    this.config = this.configService.getConfig();
  }
}