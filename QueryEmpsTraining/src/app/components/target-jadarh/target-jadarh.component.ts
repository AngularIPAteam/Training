import { Component, OnInit,Input } from '@angular/core';
import {SearchResultModel} from '../../Models/search-result.model';

@Component({
  selector: 'app-target-jadarh',
  templateUrl: './target-jadarh.component.html',
  styleUrls: ['./target-jadarh.component.scss']
})
export class TargetJadarhComponent implements OnInit {

  @Input('resulttargetjadarh') detailResult: SearchResultModel;

  constructor() { }

  ngOnInit() {
  }

}
