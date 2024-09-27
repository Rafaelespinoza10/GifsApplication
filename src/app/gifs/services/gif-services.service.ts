import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { enviroment } from '../../../enviroment/enviroments';


@Injectable({
  providedIn: 'root'
})   //Servicio dispobible en toda la aplicacion

export class GifService {

  public gifsList : Gif[] = [];
  private _tagsHistory: string [] = [];
  private apiKeyReference = enviroment.apiKeyReference;
  private urlService =  'https://api.giphy.com/v1/gifs';

  public get tagHistory() {
    return [...this._tagsHistory];
  }

  constructor(private http : HttpClient ){
    this.loadLocalStorage();
  if(this._tagsHistory.length !== 0)
      this.searchTag(this._tagsHistory[0])
  }

  public  searchTag(newTag : string): void{
    if( newTag.length === 0 ) return;
    this.organizeTag(newTag);

    const params = new HttpParams()
      .set('api_key', this.apiKeyReference)
      .set('limit', '15')
      .set('q', newTag);

    this.http.get<SearchResponse>(`${this.urlService}/search`,{ params }).subscribe(
      (response ) => {
        this.gifsList = response.data;
      }
    );

  }

    private saveLocalStorage(): void {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory));
    }

    private loadLocalStorage() :void {
      if(!localStorage.getItem('history')) return;
      this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    }

  private organizeTag( newTag: string){

    newTag = newTag.toLowerCase();

    if(this.tagHistory.includes(newTag)){
      this._tagsHistory =  this.tagHistory.filter(oldTag => oldTag !== newTag);
      }
      this._tagsHistory.unshift(newTag);
      this._tagsHistory = this.tagHistory.splice(0, 15);
      this.saveLocalStorage();
   }
}

