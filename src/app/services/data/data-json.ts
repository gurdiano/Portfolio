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
const docs =  {
  documents: [
    {
      name: 'UX/UI',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png',
      link: 'https://www.figma.com/'
    },
    {
      name: 'UML',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1200px-Google_Drive_icon_%282020%29.svg.png',
      link: 'https://app.diagrams.net/',
    },
    {
      name: 'AWS',
      icon: null,
      link: 'https://aws.amazon.com/pt/',
    }
  ]
}
const imgs = {
  images : [
    {
      src: 'assets/person/project.png',
    },
    {
      src: 'assets/person/project.png',
    },
    {
      src: 'assets/person/project.png',
    },
    {
      src: 'assets/person/project.png',
    },
    {
      src: 'assets/person/project.png',
    },
    {
      src: 'assets/person/project.png',
    }
  ]
}
const downloads = { 
  "plataforms": [
    {
      "name": "Windows",
      "downloadTypes": [
        {
          "name": "Exe",
          "link": "https://novabrasilfm.com.br/app/uploads/2025/03/meme-chico-buarque3.webp",
          "iconRef": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiy0F_WLI_pTKgp6UTjKHNXLllGJSYbmvJQ&s"
        },

        {
          "name": "Zip",
          "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKBLouIMCnTNHponwwJ3Gk1lykgp5omTaXlIriFapuHgmtwldAu-XyOBoiBaL9f4XbWw&usqp=CAU",
          "iconRef": "https://cdn-icons-png.flaticon.com/512/9704/9704802.png"
        },

        {
          "name": "4Shared",
          "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKBLouIMCnTNHponwwJ3Gk1lykgp5omTaXlIriFapuHgmtwldAu-XyOBoiBaL9f4XbWw&usqp=CAU",
          "iconRef": "https://play-lh.googleusercontent.com/zrIPAjXaMgqJJoKAXDDqKlkFADZ3OxwpiUcilHbYemS8l3aIlGSohNcsuzpnVQXZfJI0"
        }
      ]
    }
  ]
}
const steps = {
  name: 'Installation guide',
  steps: [
    {
      name: 'Step 1:',
      img: 'https://storage.googleapis.com/support-forums-api/attachment/thread-5860338-5265896632292218541.png',
      description: 'Lorem ipsum dolor sit amet. Eos molestiae architecto et laudantium nihil est commodi itaque eos dolore quod qui adipisci provident. Non esse velit est corporis quia vel dicta dolor. Hic rerum vitae ut quae quasi vel dolor adipisci ea quas voluptatibus non quam provident qui quos. Ut voluptatibus distinctio et enim natus aut tenetur quia. Et cumque quia sed sunt provident sed dolorum quia et facilis eius quo perspiciatis velit ut provident facilis et rerum voluptas. Non internos consequuntur ut aspernatur nulla qui atque pariatur qui libero voluptas',
    },
    {
      name: 'Step 2:',
      img: 'https://support.microsoft.com/images/en-us/8aaf7049-968a-4cf4-9870-53086b5e875b',
      description: 'Lorem ipsum dolor sit amet. Eos molestiae architecto et laudantium nihil est commodi itaque eos dolore quod qui adipisci provident. Non esse velit est corporis quia vel dicta dolor. Hic rerum vitae ut quae quasi vel dolor adipisci ea quas voluptatibus non quam provident qui quos. Ut voluptatibus distinctio et enim natus aut tenetur quia. Et cumque quia sed sunt provident sed dolorum quia et facilis eius quo perspiciatis velit ut provident facilis et rerum voluptas. Non internos consequuntur ut aspernatur nulla qui atque pariatur qui libero voluptas',
    },
    {
      name: 'Step 3:',
      img: null,
      description: 'Lorem ipsum dolor sit amet. Eos molestiae architecto et laudantium nihil est commodi itaque eos dolore quod qui adipisci provident. Non esse velit est corporis quia vel dicta dolor. Hic rerum vitae ut quae quasi vel dolor adipisci ea quas voluptatibus non quam provident qui quos. Ut voluptatibus distinctio et enim natus aut tenetur quia. Et cumque quia sed sunt provident sed dolorum quia et facilis eius quo perspiciatis velit ut provident facilis et rerum voluptas. Non internos consequuntur ut aspernatur nulla qui atque pariatur qui libero voluptas',
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
  getDocuments() {
    return docs;
  }
  getImages() {
    return imgs;
  }
  getDownloads() {
    return downloads;
  }
  getSteps() {
    return steps;
  }
}
