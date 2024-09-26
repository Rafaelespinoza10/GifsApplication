import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gif-services.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput') public tagInput!: ElementRef<HTMLInputElement>

  constructor(private gifServices: GifService){}  // Aqui se inyecta el service en el constructor

  public searchTag(){
    const newTag = this.tagInput.nativeElement.value;

    this.gifServices.searchTag( newTag );

    //Limpiar la busqueda del Gif
    this.tagInput.nativeElement.value = '';
  }
}
