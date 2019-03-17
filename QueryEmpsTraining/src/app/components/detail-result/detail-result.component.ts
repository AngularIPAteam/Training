import { Component, OnInit, Input } from '@angular/core';
import {SearchResultModel} from '../../Models/search-result.model';



@Component({
  selector: 'app-detail-result',
  templateUrl: './detail-result.component.html',
  styleUrls: ['./detail-result.component.scss']
})
export class DetailResultComponent implements OnInit {

  disabledButton  = true;
  @Input('detailResult') detailResult: SearchResultModel;

  constructor() { }

  ngOnInit() {
  }
  
}
