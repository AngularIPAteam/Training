import { Component, OnInit, Output,Input , EventEmitter} from '@angular/core';
import {SearchResultModel} from '../../Models/search-result.model';
import { CustomHttpRequestService } from '../../services/custom-http-request.service';



@Component({
  selector: 'app-detail-result',
  templateUrl: './detail-result.component.html',
  styleUrls: ['./detail-result.component.scss']
})
export class DetailResultComponent implements OnInit {
  private searchResultUrl : string = 'TrainingRest-RESTWebService-context-root/rest/v0/SOV/';

  disabledButton  = true;
  @Input('detailResult') detailResult: SearchResultModel;

  constructor(private httpRequest: CustomHttpRequestService) { }

  ngOnInit() {
  }
  
}
