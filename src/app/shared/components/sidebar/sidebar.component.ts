import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../../gifs/services/gif-services.service';

@Component({
  selector: 'component-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {

  @ViewChild('buttonClicTag') public enterTag!: ElementRef<HTMLButtonElement>;
    constructor(private gifService : GifService){}

  public get newTag() : string[] {
    return this.gifService.tagHistory;
  }

  public searchTag(tag : string){
      this.gifService.searchTag(tag);
  }

}
