import { Component, Input } from '@angular/core';
import { GifService } from '../../services/gif-services.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-component-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomePagesComponents {


    //inyectamos el servicio para que pueda utilizar el listado de Gifs

    constructor(private gifsServices : GifService){}


    public get gifs() : Gif[] {
      return [...this.gifsServices.gifsList];
    }


}
