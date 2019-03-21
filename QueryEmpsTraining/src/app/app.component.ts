import { Component } from '@angular/core';
import {SearchResultModel} from './Models/search-result.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QueryEmpsTraining';

  searchResults: SearchResultModel[];
  searchResult: SearchResultModel;
  

  disaplySearchResults(searchResults: SearchResultModel []){
    this.searchResults = searchResults;
    
  }

  setSearchResult(searchResult: SearchResultModel){
    this.searchResult = searchResult;
    console.log(searchResult);
  }

}
