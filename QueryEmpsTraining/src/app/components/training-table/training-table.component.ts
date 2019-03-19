import { Component, OnInit , Input} from '@angular/core';
import {SearchResultModel} from '../../Models/search-result.model';

@Component({
  selector: 'app-training-table',
  templateUrl: './training-table.component.html',
  styleUrls: ['./training-table.component.scss']
})
export class TrainingTableComponent implements OnInit {

  @Input('detailResulttable') detailResult: SearchResultModel;

  constructor() { }

  ngOnInit() {
  }

}
