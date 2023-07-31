import { Component } from '@angular/core';
import { AiService } from './ai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'GenAI01';
  searchText: string = '';
  
  constructor(private aiService: AiService){ }
  
  generateResponse() {
    let searchText = this.searchText.trim();
    searchText = (searchText.endsWith('?') ? searchText.slice(0, -1) : searchText).trim();
    this.aiService.searchQuery(searchText);
    this.searchText = '';
  }
}
