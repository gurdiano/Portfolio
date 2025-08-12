import { Component, inject } from '@angular/core';
import { BaseCard } from '../../components/base-card/base-card';
import { DataJson } from '../../services/data/data-json';
import { JsonPipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [
    BaseCard,
    SlicePipe,
    JsonPipe,
  ],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {
  data: any[];
  data2: any;
  data3: any;
  data4: any;
  data5: any;
  data6: any;
  aboutString: string = "Lorem ipsum dolor sit amet. Eos molestiae architecto et laudantium nihil est commodi itaque eos dolore quod qui adipisci provident. Non esse velit est corporis quia vel dicta dolor. Hic rerum vitae ut quae quasi vel dolor adipisci ea quas voluptatibus non quam provident qui quos ipsa.\n Ut voluptatibus distinctio et enim natus aut tenetur quia. Et cumque quia sed sunt provident sed dolorum quia et facilis eius quo perspiciatis velit ut provident facilis et rerum voluptas. Non internos consequuntur ut aspernatur nulla qui atque pariatur qui libero voluptas ad quisquam doloremque!\n In consequatur totam aut provident officia est aliquid sunt et voluptas rerum nam nesciunt nihil ea sunt fugit et laborum porro! Ea doloremque quos non amet velit est laboriosam omnis et soluta perferendis? Sed nulla voluptatem qui tempora ducimus hic voluptas nobis qui officia saepe ad amet voluptas."

  dataService = inject(DataJson);

  constructor () {
    this.data = this.dataService.getTechnologiesResponse();
    this.data2 = this.dataService.getDocuments();
    this.data3 = this.dataService.getImages();
    this.data4 = this.dataService.getDownloads();
    this.data5 = this.dataService.getSteps();
    this.data6 = this.dataService.getGits();
  }
}
