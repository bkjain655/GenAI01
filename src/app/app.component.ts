import { Component } from '@angular/core';
import { AiService } from './ai.service';
import { DEFAULT_QUESTIONS } from './results';
import { NzAutocompleteOptionComponent } from 'ng-zorro-antd/auto-complete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  searchText: string = '';
  default_questions = DEFAULT_QUESTIONS;
  filtered_questions: string[] = [];
  constructor( private aiService: AiService){ }
  
  resetValues(): void {
    this.searchText = '';
    this.filtered_questions = [];
  }

  generateResponse() {
    let searchText = this.searchText.trim();
    searchText = (searchText.endsWith('?') ? searchText.slice(0, -1) : searchText).trim();
    this.aiService.searchQuery(searchText);
    this.resetValues();
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.filtered_questions = this.default_questions.filter(v => v.toLowerCase().includes(value.toLowerCase()));
  }
}
