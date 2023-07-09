import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs';

const GIPS_API_KEY = 'NackW76ET7toI4tpjk5Lr6EFJ62qUHIk';

@Injectable({
  providedIn: 'root'
})
export class GitsService {
  public gifList: Gif[] = [];

  private _tagHistory: string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private readonly http: HttpClient) {
    this.loadItemLocalStorage();
   }

  get tagHistory(): string[] {
    return [...this._tagHistory];//copy of array from _tagHistory
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.orgnazeTagHistory(tag);
    const params = new HttpParams()
      .set('api_key', GIPS_API_KEY)
      .set('q', tag)
      .set('limit', '10');
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(res => {
        this.gifList = res.data;
      });
  }

  private orgnazeTagHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(t => t !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.slice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  private loadItemLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagHistory = JSON.parse(localStorage.getItem('history')!);
    if (this._tagHistory.length === 0) return;
    this.searchTag(this._tagHistory[0]);
  }

}
