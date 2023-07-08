import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const GIPS_API_KEY = 'NackW76ET7toI4tpjk5Lr6EFJ62qUHIk';

@Injectable({
  providedIn: 'root'
})
export class GitsService {
  private _tagHistory: string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private readonly http: HttpClient) { }

  get tagHistory(): string[] {
    return [...this._tagHistory];//copy of array from _tagHistory
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.orgnazeTagHistory(tag);
    console.log(this._tagHistory);
    const params = new HttpParams()
      .set('api_key', GIPS_API_KEY)
      .set('q', tag)
      .set('limit', '3');
    this.http.get(`${this.serviceUrl}/search`, { params })
      .subscribe(res => {
        console.log(res);
      });
  }

  private orgnazeTagHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(t => t !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.slice(0, 10);
  }
}
