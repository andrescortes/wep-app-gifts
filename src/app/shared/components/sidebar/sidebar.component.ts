import { Component } from '@angular/core';
import { GitsService } from 'src/app/gifs/services/gits.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public tagHistory: string[] = [];
  constructor(private readonly gitsService: GitsService) {
  }

  get tags(): string[] {
    return this.gitsService.tagHistory;
  }

  searchTag(tag: string): void {
    this.gitsService.searchTag(tag);
  }
}
