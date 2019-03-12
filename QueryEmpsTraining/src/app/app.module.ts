import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchOperationsComponent } from './components/search-operations/search-operations.component';
import { ResultTableComponent } from './components/result-table/result-table.component';
import { DetailResultComponent } from './components/detail-result/detail-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchOperationsComponent,
    ResultTableComponent,
    DetailResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
