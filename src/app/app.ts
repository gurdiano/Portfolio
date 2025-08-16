import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { NgClass } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    NgClass,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');

  router = inject(Router);
  titleService = inject(Title);

  constructor () {
    this.titleService.setTitle(environment.namePage);
  }


  isHome(): boolean {
    return this.router.url == '/home'
  }
}
