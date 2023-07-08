import { Component, ElementRef, ViewChild } from '@angular/core';
import { GitsService } from '../../services/gits.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5 class="mb-2 font-medium">Search:</h5>
    <div class="max-w-full">
      <label class="relative block ">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <img src="assets/Minimal-Magnifying-Glass.svg" class="w-6 h-4 fill-slate-300" alt="Descripción del SVG">
        </span>
        <input
        #txtInputValue
         (keyup.enter)="searchTag()"
         class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-10 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
      </label>
    </div>
  `
})

export class SearchBoxComponent {
  @ViewChild('txtInputValue')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private readonly GitsService: GitsService) { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.GitsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
