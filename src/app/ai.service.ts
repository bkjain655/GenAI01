import { Injectable } from '@angular/core';
import { IResults } from './text-sql-interface';
import RESULTS from './results';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private results: IResults[] = [];
  results$: BehaviorSubject<IResults[]> = new BehaviorSubject<IResults[]>([]);
  constructor() { }

  searchQuery(query: string) {
    const res: IResults = RESULTS.find(v => v.question.includes(query)) || {
      question: query,
      answer: {
        response: 'Sorry, unable to find an appropriate response for your database query. Please modify and search again.',
         sources: {
            content: '',
            raw_output: ['unable to process your query'],
            tool_name: 'unhandled_query'
         }
      }
    };
    setTimeout(() => {
      this.results.push(res);
      this.results$.next(this.results);
    }, 500);
  }
}
