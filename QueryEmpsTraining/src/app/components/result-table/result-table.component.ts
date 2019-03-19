import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SearchResultModel} from '../../Models/search-result.model';
import { CustomHttpRequestService } from '../../services/custom-http-request.service';


@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {

  private searchResultUrl : string = 'TrainingRest-RESTWebService-context-root/rest/v0/SOV/';

  @Input('resultTable') searchResults: SearchResultModel [];
  @Output('serarchResult') serarchResult = new EventEmitter<any>();

  constructor(private httpRequest: CustomHttpRequestService) { }

  ngOnInit() {
  
  }

  displayDetails(CourseCode: number) {
    console.log(CourseCode);
    this.httpRequest.get(this.searchResultUrl + CourseCode).subscribe((serarchResult: SearchResultModel) => {
      this.serarchResult.emit(serarchResult);
    });
  }
}
