import { Component, OnInit, Input } from '@angular/core';
import {SearchResultModel} from '../../Models/search-result.model';


@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {

  @Input('resultTable') searchResults: SearchResultModel [];

  constructor() { }

  ngOnInit() {
  }

}
