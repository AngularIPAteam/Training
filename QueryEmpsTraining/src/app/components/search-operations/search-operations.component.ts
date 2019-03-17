import { Component, OnInit, Output, ElementRef, ViewChild , EventEmitter} from '@angular/core';
import {SearchResultModel} from '../../Models/search-result.model';
import { CustomHttpRequestService } from '../../services/custom-http-request.service';
import { log } from 'util';

@Component({
  selector: 'app-search-operations',
  templateUrl: './search-operations.component.html',
  styleUrls: ['./search-operations.component.scss']
})
export class SearchOperationsComponent implements OnInit {

  private searchResultUrl : string = 'TrainingRest-RESTWebService-context-root/rest/v0/SOV';
  @Output('searchResult') searchResultsModel = new EventEmitter<SearchResultModel []>();

  @ViewChild('aljadarhType') aljadarhType: ElementRef;
  @ViewChild('aljadarhName') aljadarhName: ElementRef;
  @ViewChild('activtyType') activtyType: ElementRef;
  @ViewChild('executingAgency') executingAgency: ElementRef;
  @ViewChild('sector') sector: ElementRef;
  @ViewChild('domain') domain: ElementRef;
  @ViewChild('country') country: ElementRef;
  @ViewChild('city') city: ElementRef;
  @ViewChild('startDate') startDate: ElementRef;
  @ViewChild('activtyTrainingName') activtyTrainingName: ElementRef;

  constructor(private httpRequest: CustomHttpRequestService) { }

  ngOnInit() {}

  /**
   * @description Return search Results 
   */
  getSearchResult(){
    this.httpRequest.get(this.searchResultUrl).subscribe((searchResults) =>{
      this.searchResultsModel.emit(searchResults);
      // console.log(this.searchResultsModel)
    });
  }
}
