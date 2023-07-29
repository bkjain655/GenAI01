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
    this.aiService.searchQuery(this.searchText);
    this.searchText = '';
  }
}
