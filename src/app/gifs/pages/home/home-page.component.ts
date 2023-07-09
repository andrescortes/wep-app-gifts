import { Component } from '@angular/core';
import { GitsService } from '../../services/gits.service';
import { Gif } from '../../interfaces/gifs';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor(private readonly gifService: GitsService) { }

  get gifs(): Gif[] {
    return this.gifService.gifList;
  }

}
