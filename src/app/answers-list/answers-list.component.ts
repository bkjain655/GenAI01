import { Component, Input, OnInit } from '@angular/core';
import { IResults } from '../text-sql-interface';
import { AiService } from '../ai.service';
import { tap } from 'rxjs';


@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.scss']
})
export class AnswersListComponent implements OnInit {
  results: IResults[] = [];
  constructor(private aiService: AiService) { }

  ngOnInit(): void {
    this.aiService.results$.pipe(
      tap((data:IResults[]) => {
        this.results = data;
      })
    ).subscribe();
  }

}
