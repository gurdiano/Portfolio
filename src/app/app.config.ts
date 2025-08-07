import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};

export const Config = {
  // general
  repName: 'Lorem Ipsum',
  copyright: 'Copyright (c) 2025 Lorem Ipsum',
  likedin: 'loremipsum',
  email: 'loremipsumcontact@hotmail.com',
  school: 'COMPUTER SCIENCE',
  sem: '8',
  // contact-page
  linkedinUrl: 'https://www.linkedin.com/in/gurdianotiago/',
  githubUrl: 'https://github.com/gurdiano',
  emailUrl: 'https://outlook.live.com/mail/0/',
  facebookUrl: 'https://facebook.com/profile.php?id=61559880032696',
  instagramUrl:  'https://www.instagram.com/tiagogurdiano/',
  discordUrl: 'https://discord.com/',
  whatsappUrl: 'https://web.whatsapp.com/',
  // about-page
  about: {
    subTitle: 'Freelancer Programmer, 25 years old, fascinated by logic and programming, Java enthusiast, lover of software architecture and projects.',
    background: {
      subTitle: "Hello! My name is Tiago, I'm 25 years old, and I'm in the final semester of my Bachelor's degree in Computer Science.",
      P1: "My journey in technology began early, at the age of 8, when I won a computer in a raffle at the public school I attended. My curiosity about running games and modifying the system led me, even as a child, to explore the world of computers — from installing Linux on my own to trying (not always successfully) to swap out hardware components!",
      P2: 'As a teenager, I discovered the YouTube channel "Código Fonte" and, even without understanding everything, I decided I would study Software Engineering. After finishing high school, I enrolled in a prep course and took university entrance exams with the goal of earning a scholarship. I initially started a degree in Computer Engineering at a private institution, but with the arrival of the pandemic and financial difficulties in my family, I had to put my studies on hold.',
      P3: "Even so, I didn’t give up. I earned a full scholarship in Systems Analysis and Development, and shortly after, another one in Computer Science — the degree I'm now completing, fulfilling the dream that began years ago with a simple computer won in a school raffle.",
    },
    education: [
      {
        course: 'B.Sc. in Computer Science',
        school: 'UNASP – São Paulo, Brazild',
        period: 'Jan 2021 – Present (expected graduation: Dec 2025)',
        status: 'Completed 8 semesters',
      },
      {
        course: 'B.Sc. in Computer Engineering (paused)',
        school: 'UNASP – São Paulo, Brazil',
        period: 'Jan 2019 – Jul 2020 ',
        status: 'Completed up to 3rd semester',
      },
      // ADD
      // {
      //   course: '',
      //   school: '',
      //   period: '',
      //   status: '',
      // },
    ],
    experience: [
      {
        position: 'Freelancer',
        company: 'Indeniza (Legal ERP system for law offices)',
        period: 'October 2023 – March 2024',
        description: 'MVP - Partnered with the client to map workflows for DPVAT claims, translated requirements into user stories and wireframes, for validation. Architected and shipped in Java 17 / Spring Boot, using a layered REST API, PostgreSQL, and JWT‐based authentication with encrypted tokens; infrastructure prepared for AWS deployment.',
      },
      {
        position: 'Intern',
        company: 'Engie Brasil',
        period: 'January 2023 - August 2023',
        description: 'Intern - Operational Excellence. Assistance in process mapping, workflow automations, and project monitoring.',
      },
      {
        position: 'Administrative Apprentice',
        company: 'Tecnisa',
        period: 'August 2019 – August 2020',
        description: 'Invoice Processing Center - Verified and processed supplier invoices, ensuring compliance and accuracy. Registered invoices into the SAP system, supporting the accounts payable workflow.',
      },
      // ADD
      // {
      //   position: '',
      //   company: '',
      //   period: '',
      //   description: '',
      // },
    ],
  },
};
