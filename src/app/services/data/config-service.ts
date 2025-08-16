import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Skill {
  icon: string,
  role: string
}
export interface Skills {
  favorite: Skill[]
}
export interface Experience{
  position: string,
  company: string,
  period: string,
  description: string
}
export interface Education {
  course: string,
  school: string,
  period: string,
  status: string
}
export interface Background {
  subTitle: string,
  P1: string,
  P2: string,
  P3: string
}
export interface About {
  subTitle: string,
  background: Background,
  education: Education[],
  experience: Experience[]
}
export interface AppConfig {
  name: string,
  copyright: string,
  linkedin: string,
  email: string,
  school: string,
  sem: string,
  linkedinUrl: string,
  gitHubUrl: string,
  emailUrl: string,
  facebookUrl: string,
  instagramUrl: string,
  discordUrl: string,
  whatsappUrl: string,
  about: About,
  skills: Skills,
  mainStack: number[],
  secondaryStack: number[],
  roles: number[]
}
export interface UserResponse {
  id: number,
  name: string,
  email: string,
  config: string,
  configJson: AppConfig,
  projectNames: any[]
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config!: AppConfig;

  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  userId = environment.userId;

  async loadConfig(): Promise<AppConfig> {
    const source$ = this.http.get<UserResponse>(`${this.apiUrl}Users/${this.userId}`).pipe(
      map(res => res.configJson)
    );
    const firstNumber = await firstValueFrom(source$);
    
    this.config = firstNumber;

    return firstNumber
  }

  getConfig(): AppConfig {
    return this.config;
  }
}
