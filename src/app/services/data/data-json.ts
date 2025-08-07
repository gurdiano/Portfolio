import { Injectable } from '@angular/core';

const project1 = {
  id : 1,
  name : 'GurSchedule',
  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  download: 'gurschedule.download.com',
  git: 'https://github.com/gurdiano/GurSchedule',
  icon: 'assets/person/projects/gurschedule.png',
  tech: [
    {
      name: 'Python',
      icon: 'assets/images/tecs/test/python.png',
    },
    {
      name: 'SqlAlchemy',
      icon: null,
    },
    {
      name: 'Flet',
      icon: 'assets/images/tecs/test/loading-animation.png',
    },
    {
      name: 'SQAlchemy',
      icon: null,
    },
  ],
}
const project2 = {
  id : 2,
  name : 'Indeniza',
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  download: null,
  git: 'https://github.com/gurdiano/indeniza',
  icon: 'assets/person/projects/indeniza.png',
  tech: [
    {
      name: 'Java',
      icon: null,
    },
    {
      name: 'Angular',
      icon: null,
    },
    {
      name: 'SpringBoot',
      icon: null,
    },
    {
      name: 'PostgreSQL',
      icon: null,
    },
  ],
}
const techs = { 
  techs: [
    {
      name : 'Python',
      icon : 'assets/images/tecs/test/python.png',
      progress: 70,
    },
    {
      name : 'SQLAlchemy',
      icon : 'assets/images/tecs/test/cogwheel.png',
      progress: 60,
    },
    {
      name : 'Flet',
      icon : 'assets/images/tecs/test/loading-animation.png',
      progress: 80,
    },
    {
      name : 'SQLite',
      icon : 'assets/images/tecs/test/sql.png',
      progress: 45,
    },
    {
      name : 'Angular',
      icon : null,
      progress: 67,
    },
    {
      name : 'Java',
      icon : null,
      progress: 76,
    },
    {
      name : 'SpringBoot',
      icon : null,
      progress: 69,
    },
    {
      name : 'PostgreSQL',
      icon : null,
      progress: 83,
    },
    {
      name : 'CSS',
      icon : null,
      progress: 8,
    },
    {
      name : 'HTML',
      icon : null,
      progress: 26,
    },
    {
      name : 'NODE',
      icon : null,
      progress: 11,
    },
    {
      name : 'APACHE',
      icon : null,
      progress: 50,
    },
    {
      name : 'EXPRESS',
      icon : null,
      progress: 20,
    },
    {
      name : 'FLUTTER',
      icon : null,
      progress: 33,
    },
    {
      name : 'FLUTTER',
      icon : null,
      progress: 33,
    },
    {
      name : 'FLUTTER',
      icon : null,
      progress: 33,
    },
    {
      name : 'FLUTTER',
      icon : null,
      progress: 33,
    },
    {
      name : 'FLUTTER',
      icon : null,
      progress: 33,
    },
    {
      name : 'FLUTTER',
      icon : null,
      progress: 33,
    },
    {
      name : 'FLUTTER',
      icon : null,
      progress: 33,
    },
    {
      name : 'FLUTTER',
      icon : null,
      progress: 33,
    },
    {
      name : 'FLUTTER',
      icon : null,
      progress: 33,
    },
    {
      name : 'FLUTTER',
      icon : null,
      progress: 33,
    },
  ]
}

@Injectable({
  providedIn: 'root'
})
export class DataJson {
  private projectResponse = [project1, project2];

  getProjectResponse() {
    return this.projectResponse;
  }
  getTechnologiesResponse() {
    return techs.techs;
  }
}
